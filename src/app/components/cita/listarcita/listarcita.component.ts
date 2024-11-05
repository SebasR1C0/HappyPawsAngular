import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Cita } from '../../../models/Cita';
import { CitaService } from '../../../services/cita.service';

@Component({
  selector: 'app-listarcita',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarcita.component.html',
  styleUrl: './listarcita.component.css'
})
export class ListarcitaComponent {
  dataSource:MatTableDataSource<Cita>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'c5','c6','c7', 'c8','accion01']
  constructor(private cS: CitaService){}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
