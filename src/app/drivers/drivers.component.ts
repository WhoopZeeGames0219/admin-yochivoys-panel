import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { Router, NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: any = [];
  dummy = Array(10);
  dummyDrivers: any = [];
  searchQuery: string = ''; // Valor del input de búsqueda
  cities: any = [];
  constructor(
    private api: ApisService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.drivers = [];
    this.dummyDrivers = [];
    this.cities = [];
    this.api.getUsers().then((data) => {
      this.dummy = [];
      console.log('users data', data);
      data.forEach(element => {
        if (element.type === 'delivery') {
          this.drivers.push(element);

          this.dummyDrivers.push(element);
        }

      });
      console.log(this.drivers);

      // Obtener ciudades después de cargar usuarios
      this.getCities();
    }, error => {
      this.dummy = [];
      console.log(error);
    }).catch(error => {
      this.dummy = [];
      console.log(error);
    });
  }

  get driversWithCityNames() {
    return this.drivers.map(driver => {
      const city = this.cities.find(c => c.id === driver.city);
      return {
        ...driver,  // Conservamos las demás propiedades
        cityName: city ? city.name : 'N/A'  // Agregamos el nombre de la ciudad
      };
    });
  }

  getCities() {
    this.api.getCities().then((data) => {
      this.cities = data; // Llenar la lista de ciudades
    }).catch(error => {
      console.log('Error al obtener las ciudades:', error);
    });
  }

  search(string) {
    this.searchQuery = string;
    this.resetChanges();
    console.log('string', string);
    this.drivers = this.filterItems(string);
  }


  protected resetChanges = () => {
    this.drivers = this.dummyDrivers;
  }

  setFilteredItems() {
    console.log('clear');
    this.drivers = [];
    this.drivers = this.dummyDrivers;
  }

  filterItems(searchTerm) {
    return this.drivers.filter((item) => {
      return item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  createNew() {
    const navData: NavigationExtras = {
      queryParams: {
        register: true
      }
    };
    this.router.navigate(['admin-newdriver'], navData);
  }
  getClass(item) {
    if (item === 'active') {
      return 'btn btn-success rounded font-weight-bold';
    } else if (item === 'deactive') {
      return 'btn btn-danger rounded font-weight-bold';
    }
    return 'btn btn-warning rounded font-weight-bold';
  }

  changeStatus(item) {
    const text = item.status === 'active' ? 'deactive' : 'active';
    console.log(text);
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('To ') + text + this.api.translate(' this driver!'),
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: this.api.translate('Yes'),
      showCancelButton: true,
      cancelButtonText: this.api.translate('Cancel'),
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
        console.log('update it');
        item.status = text;
        console.log(item);
        this.spinner.show();
        this.api.updateProfile(item.uid, item).then((data) => {
          this.spinner.hide();
          this.getUsers();
        }, error => {
          console.log(error);
          this.spinner.hide();
        }).catch(error => {
          this.spinner.hide();
          console.log(error);
        });
      }
    });
  }
  openDriver(item) {
    const navData: NavigationExtras = {
      queryParams: {
        id: item.uid,
        register: false
      }
    };
    this.router.navigate(['admin-newdriver'], navData);
  }

  generateReport() {
    const doc = new jsPDF();

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte de Repartidores', 105, 10, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Filtro aplicado: "${this.searchQuery || 'Todos los Repartidores'}"`, 105, 20, { align: 'center' });

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Preparar datos para la tabla
    const tableData = this.drivers.map(driver => {
      const city = this.cities.find(c => c.id === driver.city); // Obtener el nombre de la ciudad
      return [
        driver.fullname,
        driver.email,
        driver.phone,
        driver.status,
        driver.descriptions,
        city ? city.name : 'Ciudad no asignada'
      ];
    });

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['Nombre', 'Correo', 'Teléfono', 'Estado', 'Descripcion', 'Cuidad']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableData,
    });

    // Guardar el archivo
    this.http.get('assets/images/dashboard/yochivoy_logo.png', { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;

        // Agregar imagen al reporte
        doc.addImage(base64Image, 'PNG', 175, 5, 30, 15); // Ajustar coordenadas y tamaño si es necesario

        // Guardar el reporte
        doc.save('reporte_usuarios.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }
}
