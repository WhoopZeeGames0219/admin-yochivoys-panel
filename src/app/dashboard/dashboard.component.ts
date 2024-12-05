import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../services/apis.service';
import * as moment from 'moment';
import { NavigationExtras, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

// import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  rest: any = [];
  reviews: any = [];
  new: boolean;
  id: any;
  users: any = [];
  usersTotal: number;
  usersPercent = 0;
  messagesCount = 0;
  drivers: any = [];
  driversTotal: number;
  driversPercent = 0;
  orders: any = [];
  displayOrders: any = [];
  dummy = Array(10);
  ordersCanceled: any = [];
  ordersDelivered: any = [];
  ordersRejected: any = [];
  monthlyOrdersArray: any = [];
  public groupedReviews: any[] = [];

  // Arreglos para data de graficas
  dataChartOrders: any[] = [];
  dataChartTopRest: any[] = [];
  dataPercentUsers: any[] = [];

  colorSchemeChartOrders: any = {};
  colorSchemePercentUsers: any = {};

  //options generales para graficas
  legend: boolean = true;
  containerWidth: number = 720; // 80% del ancho de la ventana
  containerHeight: number = 350; // 50% de la altura de la ventana

  // options vertical chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Pedidos';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';

  // options pie chart
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  // options line chart
  showLabelsLine: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabelLine: boolean = true;
  showXAxisLabelLine: boolean = true;
  xAxisLabelLine: string = 'Mes';
  yAxisLabelLine: string = 'Cantidad';
  timeline: boolean = true;
  multi: any[];

  colorSchemeLineChart = {
    domain: ['#33bbff', '#5AA454', '#A10A28', 'orange']
  };

  constructor(
    private api: ApisService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.getRest();
    this.getUsers();
    this.getAllOrders();
    this.getOrdersByStatus();
  }

  ngOnInit() {
    this.getRest();
    this.getReviews();
    this.groupReviews();
    window.addEventListener('resize', this.updateChartSize.bind(this));
  }

  updateChartSize(): void {
    this.containerWidth = window.innerWidth * 0.8; // Ajustar ancho
    this.containerHeight = window.innerHeight * 0.5; // Ajustar alto
  }

  // Detecta cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.groupReviews();
  }

  getChunkSize(): number {
    const width = window.innerWidth;
    if (width > 1200) return 4; // Pantallas grandes
    if (width > 992) return 3;   // Pantallas medianas
    if (width > 768) return 2;   // Pantallas pequeñas
    return 1;                    // Móviles
  }

  convertTo12Hour(time: string): string {
    if (!time) return '';
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convierte 0 (medianoche) o 12 (mediodía) al formato adecuado.
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  }


  groupReviews() {
    const chunkSize = this.getChunkSize();
    this.groupedReviews = []; // Reinicia el agrupamiento cada vez

    for (let i = 0; i < this.reviews.length; i += chunkSize) {
      this.groupedReviews.push(this.reviews.slice(i, i + chunkSize));
    }
  }

  getRest() {
    this.api.getVenues().then((data) => {
      console.log('rest data', data);
      this.rest = data;

      this.getTopRest(this.rest);
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getReviews() {
    this.api.getAllReviews().then((data) => {
      console.log(data);
      if (data && data.length) {
        this.reviews = data;
        this.groupReviews();
      }
    }).catch(error => {
      console.log(error);
    });
  }

  getStars(rating: number): string {
    const fullStar = '⭐';
    const emptyStar = '★';
    const maxStars = 5;

    let stars = fullStar.repeat(rating) + emptyStar.repeat(maxStars - rating);

    return stars;
  }


  getUsers() {
    this.users = [];
    this.drivers = [];
    this.messagesCount = 0;
    this.api.getUsers().then((data) => {
      console.log('users data', data);
      data.forEach(element => {
        if (element.type === 'user') {
          this.users.push(element);
        } else if (element.type === 'delivery') {
          this.drivers.push(element);
        }

        //contar total de mensajes
        if (!element.count) {
          if (element.count) {

          }
        } else {
          this.messagesCount = this.messagesCount + element.count;
        }
      });
      this.usersTotal = this.users.length;
      this.driversTotal = this.drivers.length;

      this.getPercentByUsers();
      console.log('justodesapues', this.driversPercent + " y " + this.usersPercent);

      console.log('messagesCount', this.messagesCount);
      console.log('getUseres metodo', "users.length: " + this.users.length);
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }


  getOrdersByStatus() {
    this.api.getAllOrders().then((data) => {
      console.log('orders data', data);

      data.forEach((element, i) => {
        console.log(element.status);

        if (element.status === "canceled") {

          this.ordersCanceled.push(element);
        }
        if (element.status === "delivered") {

          this.ordersDelivered.push(element);
        }
        if (element.status === "rejected") {

          this.ordersRejected.push(element);
        }
      });
      this.dummy = [];

      this.getOrdersChart(this.ordersDelivered.length, this.ordersCanceled.length, this.ordersRejected.length);
      // this.getOrdersPieChart(this.ordersDelivered.length, this.ordersCanceled.length);
      this.getMonthlyOrdersData();

    }, error => {
      console.log(error);
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });

  }
  getAllOrders() {
    this.api.getAllOrders().then((data) => {
      console.log('orders data', data);
      data.forEach(element => {
        element.time = new Date(element.time);
      });
      data.sort((a, b) => b.time - a.time);
      this.orders = data;
      this.orders.forEach((element, i) => {
        if (i <= 9) {
          element.order = JSON.parse(element.order);
          this.displayOrders.push(element);
        }
      });
      this.dummy = [];
    }, error => {
      console.log(error);
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }

  getDates(date) {
    return moment(date).format('llll');
  }

  getClass(item) {
    if (item === 'created' || item === 'accepted' || item === 'picked') {
      return 'btn btn-primary btn-round';
    } else if (item === 'delivered') {
      return 'btn btn-success btn-round';
    } else if (item === 'rejected' || item === 'canceled') {
      return 'btn btn-danger btn-round';
    }
    return 'btn btn-warning btn-round';
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

  getCurreny() {
    return this.api.getCurrecySymbol();
  }

  redirectToOrders(): void {
    this.router.navigate(['/admin-orders']);
  }

  redirectToRestaurants(): void {
    this.router.navigate(['/admin-restaurants']);
  }

  redirectToUsers(): void {
    this.router.navigate(['/admin-users']);
  }

  getOrdersChart(ordersDelivered, ordersCanceled, ordersRejected) {

    this.dataChartOrders = [
      { name: 'Entregados', value: ordersDelivered },
      { name: 'Cancelados', value: ordersCanceled },
      { name: 'Rechazados', value: ordersRejected },
    ]

    this.colorSchemeChartOrders = {
      domain: ['#5AA454', '#A10A28', 'orange']
    };
  }

  getMonthlyOrdersData() {
    const deliveredData = {};
    const canceledData = {};
    const totalOrders = {};

    this.orders.forEach(order => {
      // Convertir la fecha a un objeto Date
      order.time = new Date(order.time);
    });

    // Ordenar las ordenes de forma ascendente (enero - diciembre)
    this.orders.sort((a, b) => a.time - b.time);

    this.orders.forEach(order => {

      if (!isNaN(order.time.getTime())) {
        const monthYear = order.time.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Verificar el estado y contar la orden en el mes correspondiente
        if (order.status === 'delivered') {
          deliveredData[monthYear] = (deliveredData[monthYear] || 0) + 1;
        } else if (order.status === 'canceled') {
          canceledData[monthYear] = (canceledData[monthYear] || 0) + 1;
        }

        totalOrders[monthYear] = (totalOrders[monthYear] || 0) + 1;
      }
    });

    // Convertir los datos a formato para el gráfico
    this.multi = [
      {
        name: "Recibidos",
        series: Object.entries(totalOrders).map(([month, count]) => ({
          name: month,
          value: count
        }))
      },
      {
        name: "Entregados",
        series: Object.entries(deliveredData).map(([month, count]) => ({
          name: month,
          value: count
        }))
      },
      {
        name: "Cancelados",
        series: Object.entries(canceledData).map(([month, count]) => ({
          name: month,
          value: count
        }))
      }
    ];

    // Generar el arreglo de arreglos para usar en reporte
    const monthlyOrdersArray = Object.keys(totalOrders).map(monthYear => {
      return [
        monthYear,
        totalOrders[monthYear] || 0, // Recibidos
        deliveredData[monthYear] || 0, // Entregados
        canceledData[monthYear] || 0  // Cancelados
      ];
    });

    console.log('monthlyArrayOrders', monthlyOrdersArray); // Verificar el formato generado

    // asignamos la data al arreglo para reporte
    this.monthlyOrdersArray = monthlyOrdersArray;
  }

  getTopRest(restaurants: any[]) {

    // Ordenar por rating de mayor a menor
    restaurants.sort((a, b) => b.ratting - a.ratting);

    this.dataChartTopRest = restaurants.map(restaurant => ({
      name: restaurant.name,
      value: restaurant.ratting || 0
    }));

    // this.topRestArray = restaurants.map(restaurant => [
    //   restaurant.name,
    //   restaurant.ratting || 0
    // ])

    console.log('dataChartTopRests:', this.dataChartTopRest);
  }

  getPercentByUsers() {
    const allUsers = this.users.length + this.drivers.length;
    console.log('cantidad repartidores', this.drivers.length);
    console.log('cantidad clientes', this.users.length);
    console.log('cantidad allUsers', allUsers);


    //Calculo de porcentajes (para usar en caso de ser necesario)
    this.driversPercent = (this.drivers.length / allUsers) * 100;
    console.log('porcentaje repartidores', this.driversPercent);

    this.usersPercent = (this.users.length / allUsers) * 100;
    console.log('porcentaje aqui clientes', this.usersPercent);

    this.dataPercentUsers = [
      { name: 'Clientes', value: this.users.length },
      { name: 'Repartidores', value: this.drivers.length }
    ]

    this.colorSchemePercentUsers = {
      domain: ["#248abd", "#c53b3b"]
    }
  }

  generateReport() {
    const doc = new jsPDF();
    const margin = 10;
    this.getUsers();
    this.getOrdersByStatus();
    this.getPercentByUsers();
    this.getMonthlyOrdersData();
    this.getRest();
    this.getReviews();

    console.log('generateReportDashboard', this.orders.length + " " + this.usersTotal + "drivers: " + this.driversTotal);
    console.log('generateReportDashboard porcentajes', "clientes" + this.usersPercent + " repartidores" + this.driversPercent);

    // Agregar la fecha actual alineada a la izquierda
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString() // Formato predeterminado
    doc.text('Fecha: ' + currentDate, 10, 10); // Alineado a la izquierda

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte Dashboard', 105, 10, { align: 'center' });
    doc.setFontSize(12);


    // Titulo de tabla
    const generalTitleY = margin + 20; // Posición Y para el título
    doc.setFontSize(14);
    doc.text('Datos Generales', margin, generalTitleY);

    // Preparar datos para la tabla
    const tableGeneralData = [
      [
        this.orders.length,
        this.ordersCanceled.length,
        this.ordersDelivered.length,
        this.usersTotal,
        this.rest.length
      ]
    ]

    // Agregar la tabla general al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: generalTitleY + 5, // Deja espacio después del título
      head: [['Pedidos', 'Ordenes Canceladas', 'Ordenes Entregadas', 'Usuarios', 'Sucursales']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableGeneralData,
    });

    //Preparar datos de graficas
    const chartsTitleY = doc.previousAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text('Pedidos Totales', margin, chartsTitleY);

    const tableChartsData = [
      [
        this.ordersDelivered.length,
        this.ordersCanceled.length,
        this.ordersRejected.length
      ]
    ]

    // Agregar la tabla de graficas al PDF
    autoTable(doc, {
      startY: chartsTitleY + 5,
      theme: 'grid',
      head: [['Entregados', 'Cancelados', 'Rechazados']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableChartsData,
    });

    // Titulo de tabla porcentaje de usuarios
    const percentUsersTitleY = doc.previousAutoTable.finalY + 10; // Posición Y para el título
    doc.setFontSize(14);
    doc.text('Porcentaje De Usuarios', margin, percentUsersTitleY);

    // Preparar datos para la tabla porcentaje de usuarios
    const tablePercentUsersData = [
      ['Clientes', this.usersTotal, this.usersTotal / (this.usersTotal + this.driversTotal) * 100 + '%'],
      ['Repartidores', this.driversTotal, this.driversTotal / (this.usersTotal + this.driversTotal) * 100 + '%']
    ]

    // Agregar la tabla porcentaje de usuarios al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: percentUsersTitleY + 5, // Deja espacio después del título
      head: [['Tipo de Usuario', 'Total', 'Porcentaje']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tablePercentUsersData,
    });

    // Titulo de tabla pedidos por mes
    const ordByMontTitle = doc.previousAutoTable.finalY + 10; // Posición Y para el título
    doc.setFontSize(14);
    doc.text('Pedidos Por Mes', margin, ordByMontTitle);

    // Preparar datos para la tabla pedidos por mes
    const tableOrdersByMonth = this.monthlyOrdersArray;

    // Agregar la tabla general al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: ordByMontTitle + 5, // Deja espacio después del título
      head: [['Mes', 'Recibidos', 'Entregados', 'Cancelados']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableOrdersByMonth,
    });

    // Titulo de tabla
    const rankingRestTitle = doc.previousAutoTable.finalY + 10; // Posición Y para el título
    doc.setFontSize(14);
    doc.text('Top De Restaurantes', margin, rankingRestTitle);

    // Preparar datos para la tabla top restaurantes
    const tableRankingRest = this.rest.map((restaurant, index) => [
      index + 1,
      restaurant.name,
      restaurant.ratting || 0
    ])

    // Agregar la tabla general al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: rankingRestTitle + 5, // Deja espacio después del título
      head: [['Posicion', 'Nombre del Restaurante', 'Raiting']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableRankingRest,
    });

    // Titulo de tabla reviews
    const reviewsTitleY = doc.previousAutoTable.finalY + 10; // Posición Y para el título
    doc.setFontSize(14);
    doc.text('Reseñas', margin, reviewsTitleY);

    // Preparar datos para la tabla top restaurantes
    // Ordenar reviews por fecha
    this.reviews.sort((a, b) =>
      new Date(b.createdAt.split('/').reverse().join('-')).getTime() -
      new Date(a.createdAt.split('/').reverse().join('-')).getTime()
    );

    const tableReviews = this.reviews.map(review => [
      review.vid.name || 'N/A',
      review.uid.fullname || 'N/A',
      review.createdAt || 'N/A',
      this.convertTo12Hour(review.createdTime) || 'N/A',
      review.descriptions || 'N/A'
    ])

    // Agregar la tabla general al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: reviewsTitleY + 5, // Deja espacio después del título
      head: [['Restaurante', 'Usuario', 'Fecha', 'Hora', 'Reseña']],
      headStyles: {
        textColor: [0, 0, 0],
      },
      body: tableReviews,
      columnStyles: {
        3: { cellWidth: 20 }, // Ajusta el ancho de la columna de "Hora" (4ª columna)
        4: { cellWidth: 80, overflow: 'linebreak' } // Ajusta el ancho de "Reseña" (5ª columna) y permite colapsar texto
      },
    });

    // Guardar el archivo
    this.http.get('assets/images/dashboard/yochivoy_logo.png', { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;

        // Función para agregar la imagen en la parte superior de cada página
        const addImageToPage = () => {
          doc.addImage(base64Image, 'PNG', 175, 5, 30, 15);  // Ajustar coordenadas y tamaño según sea necesario
        };

        addImageToPage();

        // Si hay más páginas, agregarlas y añadir la imagen a cada una
        const pageCount = doc.internal.pages.length;
        for (let i = 1; i < pageCount; i++) {
          doc.setPage(i);
          addImageToPage();
        }

        // Guardar el reporte
        doc.save('reporte_dashboard.pdf');
      };
      reader.readAsDataURL(blob);
    });
  }

}
