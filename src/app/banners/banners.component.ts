import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  dummy = Array(10);
  banners: any = [];
  constructor(
    private router: Router,
    private api: ApisService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.getBanners();
  }

  getBanners() {
    this.api.getBanners().then(data => {
      console.log(data);
      this.dummy = [];
      this.banners = data;
    }).catch(error => {
      this.dummy = [];
      console.log(error);
    });
  }
  ngOnInit() {
  }
  createNew() {
    this.router.navigate(['admin-newbanner']);
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
      text: this.api.translate('To ') + text + this.api.translate(' this banner!'),
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
        this.api.updateBanner(item).then((data) => {
          this.spinner.hide();
          this.getBanners();
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
      text: this.api.translate('To delete this banner!'),
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
        this.api.deleteBanner(item).then((data) => {
          this.spinner.hide();
          this.getBanners();
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
    doc.text('Reporte de Banners', 105, 10, { align: 'center' });
    doc.setFontSize(12);

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Preparar datos para la tabla
    const tableData = this.banners.map(banner => [
      banner.id,
      banner.name,
      banner.status,
    ]);

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['ID', 'Nombre de restaurante', 'Estado']],
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
        doc.save('reporte_banners.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }
}
