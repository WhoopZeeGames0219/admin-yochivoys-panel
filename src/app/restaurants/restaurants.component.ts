import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  rest: any = [];
  dummyRest: any = [];
  dummy = Array(10);
  searchQuery: string = ''; // Valor del input de búsqueda
  constructor(
    private api: ApisService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.getRest();
  }

  getRest() {
    this.api.getVenues().then((data) => {
      console.log('rest data', data);
      this.rest = data;
      this.dummyRest = data;
      this.dummy = [];
    }, error => {
      console.log(error);
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }

  search(string) {
    this.searchQuery = string;
    this.resetChanges();
    console.log('string', string);
    this.rest = this.filterItems(string);
  }


  protected resetChanges = () => {
    this.rest = this.dummyRest;
  }

  setFilteredItems() {
    console.log('clear');
    this.rest = [];
    this.rest = this.dummyRest;
  }

  filterItems(searchTerm) {
    return this.rest.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  ngOnInit() {
  }
  getClass(item) {
    if (item === 'created' || item === 'accepted' || item === 'picked') {
      return 'btn btn-primary rounded font-weight-bold';
    } else if (item === 'delivered') {
      return 'btn btn-success rounded font-weight-bold';
    } else if (item === 'rejected' || item === 'cancel') {
      return 'btn btn-danger rounded font-weight-bold';
    }
    return 'btn btn-warning rounded font-weight-bold text-dark';
  }

  openRest(item) {
    const navData: NavigationExtras = {
      queryParams: {
        id: item.id,
        register: false
      }
    };
    this.router.navigate(['admin-rest-details'], navData);
  }

  changeStatus(item) {
    console.log(item);
    const text = item.status === 'open' ? 'close' : 'open';
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate(`You can change it later`),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.api.translate('Yes, ') + text + this.api.translate(' it!')
    }).then((result) => {
      if (result.value) {
        const param = {
          uid: item.uid,
          isClose: item.isClose ? false : true,
          status: text,
        };
        console.log(param)
        this.spinner.show();
        this.api.updateVenue(param).then((data) => {
          this.spinner.hide();
          this.getRest();
          Swal.fire(
            this.api.translate('Updated!'),
            this.api.translate('Restaurants updated'),
            'success'
          );
        }).catch(error => {
          console.log(error);
          this.spinner.hide();
        });
        const userStatus = text === 'open' ? 'active' : 'deactive';
        const statusChange = {
          status: userStatus
        };
        this.api.updateProfile(item.uid, statusChange).then(data => {
          console.log(data);
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }

  createNew() {
    const navData: NavigationExtras = {
      queryParams: {
        register: true
      }
    };
    this.router.navigate(['admin-rest-details'], navData);
  }

  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  generateReport() {
    const doc = new jsPDF();

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte de Sucursales / Restaurantes', 105, 10, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Filtro aplicado: "${this.searchQuery || 'Todas las sucursales'}"`, 105, 20, { align: 'center' });

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Preparar datos para la tabla
    const tableData = this.rest.map(res => [
      res.name,
      res.address,
      res.city,
      res.email,
      res.openTime,
      res.phone,
      res.ratting
    ]);

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['Nombre', 'Domicilio', 'Cuidad', 'Correo Electronico', 'Hora de apertura', 'Telefono', 'Rating']],
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
        doc.save('reporte_sucursales.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }
}
