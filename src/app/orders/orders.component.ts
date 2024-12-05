import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import * as moment from 'moment';
import { NavigationExtras, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  myOrders: any = [];
  myaddress: any = [];
  dummOrders: any = [];
  dummy = Array(10);
  searchQuery: string = ''; // Valor del input de búsqueda
  selectedStatus: any;
  reviews: any = [];
  selectedRestaurant: string = ''; // Restaurante seleccionado
  restaurantList: string[] = [];
  startDate: string;
  endDate: string;
  name: any = '';
  email: any = '';
  photo: any = '';
  phone: any = '';
  constructor(
    private api: ApisService,
    private router: Router,
    private http: HttpClient
  ) {
    this.getAllOrders();
  }

  ngOnInit() {
    setInterval(() => {
      this.getAllOrders();
    }, 30000)
  }

  getDate(date) {
    return moment(date).format('llll');
  }

  getAllOrders() {
    this.api.getAllOrders().then((data) => {
      console.log('orders data', data);
      data.forEach(element => {
        element.time = new Date(element.time);
        element.order = JSON.parse(element.order);
      });
      data.sort((a, b) => b.time - a.time);
      this.orders = data;
      this.dummOrders = data;
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
    this.orders = this.filterItems(string);
  }


  protected resetChanges = () => {
    this.orders = this.dummOrders;
  }

  setFilteredItems() {
    console.log('clear');
    this.orders = [];
    this.orders = this.dummOrders;
  }

  filterItems(searchTerm) {
    return this.orders.filter((item) => {
      return item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }


  getClass(item) {
    if (item === 'created' || item === 'accepted' || item === 'picked') {
      return 'btn btn-primary rounded font-weight-bold w-100';
    } else if (item === 'delivered') {
      return 'btn btn-success rounded font-weight-bold w-100';
    } else if (item === 'rejected' || item === 'cancel') {
      return 'btn btn-danger rounded font-weight-bold w-100';
    }
    return 'btn btn-secondary rounded font-weight-bold w-100';
  }

  openOrder(item) {
    console.log(item);
    const navData: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };
    this.router.navigate(['admin-orderdetails'], navData);
  }



  openSetDriver(item) {
    console.log(item);
    const navData: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };
    this.router.navigate(['admin-orderdriver'], navData);
  }
  getDates(date) {
    return moment(date).format('llll');
  }

  getOrderStatus(status: string): string {
    switch (status) {
      case 'rejected':
        return 'Rechazada';
      case 'canceled':
        return 'Cancelada';
      case 'delivered':
        return 'Entregada';
      case 'created':
        return 'Creado';
      default:
        return 'Desconocido';  // Por si el estado no está en los valores conocidos
    }
  }

  convertTo12Hour(time: string): string {
    if (!time) return '';
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convierte 0 (medianoche) o 12 (mediodía) al formato adecuado.
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  }


  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  generateReport() {
    const doc = new jsPDF();
    const margin = 10;

    // Rango de fechas
    let filteredOrders = this.orders;
    let filteredReviews = this.reviews;

    if (this.startDate && this.endDate) {
      const start = moment(this.startDate).startOf('day');
      const end = moment(this.endDate).endOf('day');

      // Filtrar órdenes
      filteredOrders = this.orders.filter(order =>
        moment(order.time, "ddd, MMM D, YYYY h:mm A").isBetween(start, end, undefined, '[]')
      );

      // Filtrar reseñas (formato "DD/MM/YYYY")
      filteredReviews = this.reviews.filter(review =>
        moment(review.createdAt, "DD/MM/YYYY").isBetween(start, end, undefined, '[]')
      );
    }

    if (this.selectedStatus) {
      filteredOrders = filteredOrders.filter(order =>
        order.status === this.selectedStatus
      );
    }

    if (this.selectedRestaurant) {
      filteredOrders = filteredOrders.filter(order =>
        order.vid.name === this.selectedRestaurant
      );

      filteredReviews = filteredReviews.filter(review =>
        review.vid.name === this.selectedRestaurant
      );
    }

    // Título del reporte
    doc.setFontSize(16);
    doc.text('Reporte de Ordenes', doc.internal.pageSize.width / 2, margin, { align: 'center' });

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Cargar la imagen y agregarla en cada página
    this.http.get('assets/images/dashboard/yochivoy_logo.png', { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;

        // Función para agregar la imagen en la parte superior de cada página
        const addImageToPage = () => {
          doc.addImage(base64Image, 'PNG', 175, 5, 30, 15);  // Ajustar coordenadas y tamaño según sea necesario
        };

        // Agregar la imagen en la primera página
        addImageToPage();

        // Detalles del usuario
        const userDetailsTitleY = margin + 10; // Posición Y para el título
        doc.setFontSize(14);
        doc.text('Estadisticas de Ordenes', margin, userDetailsTitleY);

        const userDetails = [
          ['Órdenes:', filteredOrders.length],
        ];

        doc.setFontSize(12);
        autoTable(doc, {
          body: userDetails,
          theme: 'grid',
          headStyles: {
            textColor: [0, 0, 0],
          },
          startY: userDetailsTitleY + 5, // Deja espacio después del título
          margin: { left: margin, right: margin }
        });

        // Tabla de órdenes
        if (filteredOrders.length) {
          const ordersTitleY = doc.previousAutoTable.finalY + 10;
          doc.setFontSize(14);
          doc.text('Órdenes del Usuario', margin, ordersTitleY);

          autoTable(doc, {
            startY: ordersTitleY + 5,
            head: [['Orden', 'Usuario', 'Restaurante', 'Fecha', 'Total', 'Estado', 'Articulos']],
            body: filteredOrders.map(order => [
              order.id || 'N/A',
              order.uid.fullname || 'N/A',
              order.vid.name || 'N/A',
              this.getDate(order.time) || 'N/A',
              `${this.getCurrency()}${order.grandTotal || '0'}`,
              this.getOrderStatus(order.status) || 'N/A',
              order.order.map(desc => desc.desc).join(', ') || 'NA'
            ]),
            theme: 'grid',
            headStyles: {
              textColor: [0, 0, 0],
            },
            margin: { left: margin, right: margin }
          });
        }

        // Tabla de direcciones
        if (this.myaddress.length) {
          const addressesTitleY = doc.previousAutoTable.finalY + 10; // Posición Y para el título de la tabla
          doc.setFontSize(14);
          doc.text('Direcciones Registradas', margin, addressesTitleY);

          autoTable(doc, {
            startY: addressesTitleY + 5, // Deja espacio después del título
            head: [['Título', 'Dirección']],
            body: this.myaddress.map(addr => [
              addr.title || 'N/A',
              `${addr.house || ''}, ${addr.landmark || ''}, ${addr.address || ''}`.trim() || 'N/A'
            ]),
            theme: 'grid',
            headStyles: {
              textColor: [0, 0, 0],
            },
            margin: { left: margin, right: margin }
          });
        }

        /// Tabla de reseñas
        if (filteredReviews.length) {
          const reviewsTitleY = doc.previousAutoTable.finalY + 10;
          doc.setFontSize(14);
          doc.text('Reseñas del Usuario', margin, reviewsTitleY);

          autoTable(doc, {
            startY: reviewsTitleY + 5,
            head: [['Restaurante', 'Fecha', 'Hora', 'Reseña']],
            body: filteredReviews.map(review => [
              review.vid.name || 'N/A',
              review.createdAt || 'N/A',
              this.convertTo12Hour(review.createdTime) || 'N/A',
              review.descriptions || 'N/A'
            ]),
            theme: 'grid',
            headStyles: {
              textColor: [0, 0, 0],
            },
            margin: { left: margin, right: margin }
          });
        }

        // Si hay más páginas, agregarlas y añadir la imagen a cada una
        const pageCount = doc.internal.pages.length;
        for (let i = 1; i < pageCount; i++) {
          doc.setPage(i);
          addImageToPage();
        }

        // Descargar el reporte
        doc.save(`Reporte_Ordenes.pdf`);
      };
      reader.readAsDataURL(blob);  // Convertir la imagen a base64
    });
  }
}
