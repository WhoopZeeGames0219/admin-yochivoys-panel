import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApisService } from '../services/apis.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationExtras, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  dummy = Array(10);
  dummyUsers: any = [];
  filteredUsers: any = []; // Usuarios filtrados para mostrar en la tabla
  searchQuery: string = ''; // Valor del input de búsqueda

  constructor(
    private api: ApisService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.users = [];
    this.dummyUsers = [];
    this.filteredUsers = [];
    this.api.getUsers().then((data) => {
      this.dummy = [];
      data.forEach(element => {
        if (element.type === 'user') {
          this.users.push(element);
          this.dummyUsers.push(element);
        }
      });
      this.filteredUsers = [...this.users]; // Inicializamos los filtrados
    }, error => {
      console.error(error);
      this.dummy = [];
    });
  }

  search(string) {
    this.searchQuery = string;
    this.filteredUsers = this.users.filter((user) =>
      user.fullname.toLowerCase().includes(string.toLowerCase())
    );
    this.resetChanges();
    console.log('string', string);
    this.users = this.filterItems(string);
  }


  protected resetChanges = () => {
    this.users = this.dummyUsers;
  }

  setFilteredItems() {
    console.log('clear');
    this.users = [];
    this.users = this.dummyUsers;
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
      text: this.api.translate('To ') + text + this.api.translate(' this user!'),
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
  filterItems(searchTerm) {
    return this.users.filter((item) => {
      return item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  openUser(item) {
    const navData: NavigationExtras = {
      queryParams: {
        id: item.uid
      }
    };
    this.router.navigate(['admin-userdetails'], navData);
  }

  generateReport() {
    const doc = new jsPDF();

    // Agregar título al reporte
    doc.setFontSize(16);
    doc.text('Reporte de Usuarios / Clientes', 105, 10, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Filtro aplicado: "${this.searchQuery || 'Todos los clientes'}"`, 105, 20, { align: 'center' });

    // Preparar datos para la tabla
    const tableData = this.filteredUsers.map(user => [
      user.fullname,
      user.email,
      user.phone,
      user.status,
    ]);

    // Agregar la tabla al PDF
    autoTable(doc, {
      theme: 'grid',
      startY: 30,
      head: [['Nombre', 'Correo', 'Teléfono', 'Estado']],
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
