import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: any;
  dummy = Array(50);
  constructor(
    private router: Router,
    private api: ApisService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.getCity();
  }

  ngOnInit() {
  }
  getCity() {
    this.api.getCities().then(data => {
      console.log(data);
      this.cities = data;
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }
  createNew() {
    this.router.navigate(['admin-newcities']);
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
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('To ') + text + this.api.translate(' this city!'),
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
        this.api.updateCity(item).then((data) => {
          this.spinner.hide();
          this.getCity();
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
  delete(item) {
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('To delete this city!'),
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
        this.spinner.show();
        this.api.deleteCity(item).then((data) => {
          this.spinner.hide();
          this.getCity();
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

  generateReport() {
    const doc = new jsPDF();

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte de Cuidades', 105, 10, { align: 'center' });
    doc.setFontSize(12);

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Preparar datos para la tabla
    const tableData = this.cities.map(city => [
      city.id,
      city.lat,
      city.lng,
      city.name,
      city.status,
    ]);

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['ID', 'Latitud', 'Longitud', 'Nombre', 'Estado']],
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
        doc.save('reporte_cuidades.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }
}
