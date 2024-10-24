import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { Albergue } from '../../../models/Albergue';
import { AlbergueService } from '../../../services/albergue.service';


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
  templateUrl: './creaeditaalbergue.component.html',
  styleUrl: './creaeditaalbergue.component.css'
})
export class CreaeditaalbergueComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  albergue:Albergue=new Albergue()
  constructor(private aS:AlbergueService, private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
      this.form=this.formBuilder.group({
        hnombre:['',Validators.required],
        hemail:['',Validators.required],
        hdireccion:['',Validators.required],
        htelefono:['',Validators.required],
        hcapacidad:['',Validators.required],
        hapertura:['',Validators.required],
        hcierre:['',Validators.required],
        hweb:['',Validators.required],
        hacreditacion:['',Validators.required],
      })
  }
  aceptar():void{
    if(this.form.valid){
      this.albergue.nombreAlbergue=this.form.value.hnombre
      this.albergue.emailAlbergue=this.form.value.hemail
      this.albergue.direccionAlbergue=this.form.value.hdireccion
      this.albergue.telefonoAlbergue=this.form.value.htelefono
      this.albergue.capacidadMaxima=this.form.value.hcapacidad
      this.albergue.horaApertura=this.form.value.hapertura
      this.albergue.horaCierre=this.form.value.hcierre
      this.albergue.webSite=this.form.value.hweb
      this.albergue.acreditacionAlbergue=this.form.value.hacreditacion
      this.aS.insert(this.albergue).subscribe(d=>{
        this.aS.list().subscribe(d=>{
          this.aS.setList(d)
        })
      })
      this.router.navigate(['albergues'])
    }
  }
}
