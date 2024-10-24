import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Albergue } from '../../../models/Albergue';
import { AlbergueService } from '../../../services/albergue.service';

@Component({
  selector: 'app-listaralbergue',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaralbergue.component.html',
  styleUrl: './listaralbergue.component.css'
})
export class ListaralbergueComponent implements OnInit {
  dataSource:MatTableDataSource<Albergue>=new MatTableDataSource()
  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10']
  constructor(private aS: AlbergueService){}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
        this.dataSource=new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
