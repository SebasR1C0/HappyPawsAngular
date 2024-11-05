import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../models/Mascota';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MascotaService } from '../../../services/mascota.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarmascota',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarmascota.component.html',
  styleUrl: './listarmascota.component.css'
})
export class ListarmascotaComponent {
  dataSource:MatTableDataSource<Mascota>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'c5','c6','c7','c8','c9','accion01']
  constructor(private mS: MascotaService){}
  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
