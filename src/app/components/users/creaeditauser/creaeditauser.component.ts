import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Users } from '../../../models/Users';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creaeditauser',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './creaeditauser.component.html',
  styleUrl: './creaeditauser.component.css'
})
export class CreaeditauserComponent implements OnInit {

  form:FormGroup=new FormGroup({});
  user:Users=new Users()
  listaGeneros:{value:string, viewValue:string}[]=[
    {value:'Masculino',viewValue:'Masculino'},
    {value:'Femenino',viewValue:'Femenino'},
  ]
  constructor(private uS:UsersService, private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
      this.form=this.formBuilder.group({
        hnombre:['',Validators.required],
        hapellido:['',Validators.required],
        hemail:['',Validators.required],
        hdireccion:['',Validators.required],
        htelefono:['',Validators.required],
        hgenero:['',Validators.required],
        husername:['',Validators.required],
        hpassword:['',Validators.required],
      })
  }
  aceptar():void{
    if(this.form.valid){
      this.user.nombre=this.form.value.hnombre;
      this.user.apellido=this.form.value.hapellido
      this.user.email=this.form.value.hemail
      this.user.direccion=this.form.value.hdireccion
      this.user.telefono=this.form.value.htelefono
      this.user.genero=this.form.value.hgenero
      this.user.username=this.form.value.husername
      this.user.password=this.form.value.hpassword
      this.uS.insert(this.user).subscribe(d=>{
        this.uS.list().subscribe(d=>{
          this.uS.setList(d)
        })
      })
      this.router.navigate(['usuarios'])
    }
  }
}
