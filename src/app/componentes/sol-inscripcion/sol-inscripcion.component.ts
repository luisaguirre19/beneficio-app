import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sol-inscripcion',
  templateUrl: './sol-inscripcion.component.html',
  styleUrls: ['./sol-inscripcion.component.css']
})
export class SolInscripcionComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];

  users: User[] = [
    { id: 1, name: 'Juan', email: 'juan@mail.com', phone: '555-1234' },
    { id: 2, name: 'Maria', email: 'maria@mail.com', phone: '555-5678' },
    { id: 3, name: 'Pedro', email: 'pedro@mail.com', phone: '555-9012' },
    { id: 4, name: 'Ana', email: 'ana@mail.com', phone: '555-3456' },
    { id: 5, name: 'Luis', email: 'luis@mail.com', phone: '555-7890' }
  ];

  dataSource = new MatTableDataSource(this.users);


}
