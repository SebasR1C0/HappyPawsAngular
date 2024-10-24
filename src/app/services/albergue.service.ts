import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Albergue } from '../models/Albergue';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class AlbergueService {
  private url=`${base_url}/albergues`
  private listaCambio = new Subject<Albergue[]>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Albergue[]>(this.url)
  }
  insert(albergue:Albergue){
    return this.http.post(this.url, albergue)
  }

  setList(listaCambio: Albergue[]){
    this.listaCambio.next(listaCambio)
  }
  getList(){
    return this.listaCambio.asObservable()
  }

}
