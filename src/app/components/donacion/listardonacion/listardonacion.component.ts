import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Donacion } from '../../../models/Donacion';
import { DonacionService } from '../../../services/donacion.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listardonacion',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listardonacion.component.html',
  styleUrl: './listardonacion.component.css'
})
export class ListardonacionComponent {
  dataSource:MatTableDataSource<Donacion>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'c5','c6','accion01']
  constructor(private dS: DonacionService){}
  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.dS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
