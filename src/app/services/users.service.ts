import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url=`${base_url}/usuarios`
  private listaCambio = new Subject<Users[]>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Users[]>(this.url)
  }
  insert(user:Users){
    return this.http.post(this.url, user)
  }

  setList(listaCambio: Users[]){
    this.listaCambio.next(listaCambio)
  }
  getList(){
    return this.listaCambio.asObservable()
  }
}
