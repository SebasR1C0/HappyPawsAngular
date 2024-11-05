import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Role } from '../../../models/Role';
import { RoleService } from '../../../services/role.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarrole',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarrole.component.html',
  styleUrl: './listarrole.component.css'
})
export class ListarroleComponent {
  dataSource:MatTableDataSource<Role>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','accion01']
  constructor(private rS: RoleService){}
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
