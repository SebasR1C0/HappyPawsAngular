import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NotificacionService } from '../../../services/notificacion.service';
import { Notificacion } from '../../../models/Notificacion';

@Component({
  selector: 'app-listarnotificacion',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarnotificacion.component.html',
  styleUrl: './listarnotificacion.component.css'
})
export class ListarnotificacionComponent {
  dataSource:MatTableDataSource<Notificacion>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'c5','c6','accion01']
  constructor(private nS: NotificacionService){}
  ngOnInit(): void {
    this.nS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.nS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
