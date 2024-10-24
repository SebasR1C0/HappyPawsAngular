import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Users } from '../../../models/Users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-listarusuario',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent implements OnInit{
  dataSource:MatTableDataSource<Users>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11']
  constructor(private uS: UsersService){}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
