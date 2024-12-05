import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  myOrders: any = [];
  id: any;
  myaddress: any = [];
  reviews: any = [];
  selectedRestaurant: string = ''; // Restaurante seleccionado
  restaurantList: string[] = [];   // Lista de nombres de restaurantes
  name: any = '';
  email: any = '';
  photo: any = '';
  phone: any = '';
  startDate: string;
  endDate: string;
  showTracking: boolean = false;
  selectedStatus: any;
  rest: any = [];
  dummyRest: any = [];
  dummy = Array(10);

  constructor(
    private api: ApisService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      if (data && data.id) {
        this.id = data.id;
        this.getProfile();
        this.getMyOrders();
        this.getAddress();
      }
    });
  }

  ngOnInit() {
    this.getRest();
  }

  getRest() {
    this.api.getVenues().then((data: any[]) => {
      console.log('rest data', data);

      // Asegúrate de que `data` contiene los nombres de los restaurantes
      this.restaurantList = Array.from(new Set(data.map(item => item.name || 'N/A')));
    }, error => {
      console.error('Error al obtener restaurantes', error);
      this.restaurantList = []; // Limpia la lista en caso de error
    }).catch(error => {
      console.error('Error en catch:', error);
      this.restaurantList = []; // Limpia la lista en caso de error
    });
  }


  getProfile() {
    this.api.getMyProfile(this.id).then((data: any) => {
      console.log('userdata', data);
      if (data) {
        this.name = data.fullname;
        this.photo = data && data.cover ? data.cover : 'assets/avatar-1.jpg';
        this.email = data.email;
        this.phone = data.phone;
        this.api.getMyReviews(data.uid).then((reviews) => {
          console.log(reviews);
          this.reviews = reviews;
        }, error => {
          console.log(error);
        }).catch(error => {
          console.log(error);
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }
  getAddress() {
    this.api.getMyAddress(this.id).then((data) => {
      console.log('my address', data);
      if (data) {
        this.myaddress = data;
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  convertTo12Hour(time: string): string {
    if (!time) return '';
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convierte 0 (medianoche) o 12 (mediodía) al formato adecuado.
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  }

  getMyOrders() {
    this.api.getMyOrders(this.id).then((data: any) => {
      console.log('my orders', data);
      if (data && data.length) {
        data.forEach(element => {
          element.time = new Date(element.time);
        });
        data.sort((a, b) => b.time - a.time);
        this.myOrders = data;
        this.myOrders.forEach(element => {
          element.order = JSON.parse(element.order);
        });
        console.log('my order==>', this.myOrders);
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getDate(date) {
    return moment(date).format('llll');
  }

  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  showTrack() {
    this.showTracking = !this.showTracking;
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


  generateUserReport() {
    const doc = new jsPDF();
    const margin = 10;

    // Rango de fechas
    let filteredOrders = this.myOrders;
    let filteredReviews = this.reviews;

    if (this.startDate && this.endDate) {
      const start = moment(this.startDate).startOf('day');
      const end = moment(this.endDate).endOf('day');

      // Filtrar órdenes
      filteredOrders = this.myOrders.filter(order =>
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
    doc.text('Reporte de Detalles del Usuario', doc.internal.pageSize.width / 2, margin, { align: 'center' });

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
        doc.text('Detalles del Usuario', margin, userDetailsTitleY);

        const userDetails = [
          ['Nombre:', this.name || 'N/A'],
          ['Correo Electrónico:', this.email || 'N/A'],
          ['Teléfono:', this.phone || 'N/A'],
          ['Órdenes:', filteredOrders.length],
          ['Direcciones:', this.myaddress.length],
          ['Reseñas:', filteredReviews.length]
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
            head: [['Orden', 'Restaurante', 'Fecha', 'Total', 'Estado']],
            body: filteredOrders.map(order => [
              order.id || 'N/A',
              order.vid.name || 'N/A',
              this.getDate(order.time) || 'N/A',
              `${this.getCurrency()}${order.grandTotal || '0'}`,
              this.getOrderStatus(order.status) || 'N/A',
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
        doc.save(`Reporte_Usuario_${this.name || 'N/A'}.pdf`);
      };
      reader.readAsDataURL(blob);  // Convertir la imagen a base64
    });
  }



}


