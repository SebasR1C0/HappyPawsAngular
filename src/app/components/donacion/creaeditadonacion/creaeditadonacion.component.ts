import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../../../models/Users';
import { UsersService } from '../../../services/users.service';
import { Donacion } from '../../../models/Donacion';
import { DonacionService } from '../../../services/donacion.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-creaeditadonacion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule],
  templateUrl: './creaeditadonacion.component.html',
  styleUrl: './creaeditadonacion.component.css'
})
export class CreaeditadonacionComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  donacion: Donacion = new Donacion()
  id:number=0
  edicion:boolean=false

  listaTipos:{value:string, viewValue:string}[]=[
    {value:'Caridad',viewValue:'Caridad'},
    {value:'Comida',viewValue:'Comida'},
    {value:'Ropa',viewValue:'Ropa'},
  ]
  listaUsuarios: Users[] = []
  constructor(
    private dS: DonacionService, 
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private uS: UsersService,
  ){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id']!=null
      this.init()
    })
    
      this.form = this.formBuilder.group({
        hcodigo:[''],
        hfecha:['',Validators.required],
        htipo:['',Validators.required],
        hdetalle:['',Validators.required],
        hmonto:['',Validators.required],
        huser:['', Validators.required],
      })
      this.uS.list().subscribe((data) => {
        this.listaUsuarios = data;
      });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.donacion.idDonacion= this.form.value.hcodigo;
      this.donacion.fechaDonacion = this.form.value.hfecha;
      this.donacion.tipoDonacion = this.form.value.htipo;
      this.donacion.detalles = this.form.value.hdetalle;
      this.donacion.monto = this.form.value.hmonto;
      this.donacion.users.id = this.form.value.huser;

      if (this.edicion) {
        this.dS.update(this.donacion).subscribe(() => {
          this.dS.list().subscribe(data => {
            const sortedData = data.sort((a, b) => a.idDonacion- b.idDonacion);
            this.dS.setList(sortedData);
          });
        });
      } else {
        this.dS.insert(this.donacion).subscribe(() => {
          this.dS.list().subscribe(data => {
            const sortedData = data.sort((a, b) => a.idDonacion - b.idDonacion);
            this.dS.setList(sortedData);
          });
        });
      }

      this.router.navigate(['donaciones']);
    }
  }
  init(){
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idDonacion),
          hfecha: new FormControl(data.fechaDonacion),
          htipo: new FormControl(data.tipoDonacion),
          hdetalle: new FormControl(data.detalles),
          hmonto: new FormControl(data.monto),
          huser: new FormControl(data.users.id),
        });
      });
    }
  }
}

