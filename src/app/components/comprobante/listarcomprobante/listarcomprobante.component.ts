import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Comprobante } from '../../../models/Comprobante';
import { ComprobanteService } from '../../../services/comprobante.service';

@Component({
  selector: 'app-listarcomprobante',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listarcomprobante.component.html',
  styleUrl: './listarcomprobante.component.css'
})
export class ListarcomprobanteComponent {
  dataSource:MatTableDataSource<Comprobante>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4', 'accion01']
  constructor(private cS: ComprobanteService){}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
