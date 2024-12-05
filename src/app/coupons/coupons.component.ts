import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../services/apis.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  dummy = Array(10);
  users: any = [];
  list: any = [];
  searchQuery: string = ''; // Valor del input de búsqueda
  filteredCupons: any = []; // Cupones filtrados para mostrar en la tabla
  dummyCupons: any = [];
  constructor(
    private router: Router,
    private api: ApisService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    console.log('list');
    this.getOffers();
  }

  getClass(item) {
    if (item === 'active') {
      return 'btn btn-success rounded font-weight-bold';
    } else if (item === 'deactive') {
      return 'btn btn-danger rounded font-weight-bold';
    }
    return 'btn btn-warning rounded font-weight-bold';
  }

  getOffers() {
    this.dummyCupons = [];
    this.list = [];
    this.filteredCupons = [];

    this.api.getOffers().then(data => {
      console.log('list=====>', data);
      this.dummy = [];
      if (data && data.length) {
        this.list = data;
        this.dummyCupons = data;
      }
      this.filteredCupons = [...this.list]; // Inicializamos los filtrados
    }).catch(error => {
      this.dummy = [];
      console.log(error);
    });
  }
  ngOnInit() {
  }
  createNew() {
    this.router.navigate(['admin-new-coupon']);
  }
  open(item) {
    console.log(item);
    const text = item.status === 'active' ? 'deactive' : 'active';
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('To ') + text + this.api.translate(' this coupon!'),
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
        this.spinner.show();
        this.api.updateOffers(item).then((data) => {
          this.spinner.hide();
          this.getOffers();
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

  search(string) {
    this.searchQuery = string;
    this.filteredCupons = this.list.filter((cupon) =>
      cupon.code.toLowerCase().includes(string.toLowerCase())
    );
    this.resetChanges();
    console.log('string', string);
    this.list = this.filterItems(string);
  }

  protected resetChanges = () => {
    this.list = this.dummyCupons;
  }

  filterItems(searchTerm) {
    return this.list.filter((item) => {
      return item.code.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  getDate(item) {
    return moment(item).format('lll');
  }

  generateReport() {
    const doc = new jsPDF();

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte de Cupones', 105, 10, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Filtro aplicado: "${this.searchQuery || 'Todos los cupones'}"`, 105, 20, { align: 'center' });

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Preparar datos para la tabla
    const tableData = this.list.map(cupon => [
      cupon.code,
      cupon.discout,
      cupon.expire,
      cupon.min,
      cupon.type,
      cupon.upto,
      cupon.status,
      cupon.available.map(restaurant => restaurant.name).join(', ')
    ]);

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['Codigo', 'Descuento', 'Expiracion', 'Minimo de compra', 'Tipo', 'Cantidad', 'Estado', 'Restaurantes']],
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
        doc.save('reporte_cupones.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }
}
