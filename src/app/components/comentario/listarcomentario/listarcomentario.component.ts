import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Comentario } from '../../../models/Comentario';
import { ComentarioService } from '../../../services/comentario.service';

@Component({
  selector: 'app-listarcomentario',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarcomentario.component.html',
  styleUrl: './listarcomentario.component.css'
})
export class ListarcomentarioComponent {
  dataSource:MatTableDataSource<Comentario>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'accion01']
  constructor(private cS: ComentarioService){}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
