import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../services/apis.service';
import * as moment from 'moment';
import { NavigationExtras, Router } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

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
  usersPercent = 0;
  messagesCount = 0;
  drivers: any = [];
  driversPercent = 0;
  orders: any = [];
  displayOrders: any = [];
  dummy = Array(10);
  ordersCanceled: any = [];
  ordersDelivered: any = [];
  ordersRejected: any = [];
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
    private route: ActivatedRoute
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
      this.getPercentByUsers();
      console.log('messagesCount', this.messagesCount);
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
  }

  getTopRest(restaurants: any[]) {

    // Ordenar por rating de mayor a menor
    restaurants.sort((a, b) => b.ratting - a.ratting);

    this.dataChartTopRest = restaurants.map(restaurant => ({
      name: restaurant.name,
      value: restaurant.ratting || 0
    }));

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
    console.log('porcentaje clientes', this.usersPercent);

    this.dataPercentUsers = [
      { name: 'Clientes', value: this.users.length },
      { name: 'Repartidores', value: this.drivers.length }
    ]

    this.colorSchemePercentUsers = {
      domain: ["#248abd", "#c53b3b"]
    }
  }

}
