import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreaeditauserComponent } from './components/users/creaeditauser/creaeditauser.component';
import { AlbergueComponent } from './components/albergue/albergue.component';
import { CreaeditaalbergueComponent } from './components/albergue/creaeditaalbergue/creaeditaalbergue.component';
import { CitaComponent } from './components/cita/cita.component';
import { CreaeditacitaComponent } from './components/cita/creaeditacita/creaeditacita.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CreaeditacomentarioComponent } from './components/comentario/creaeditacomentario/creaeditacomentario.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { CreaeditacomprobanteComponent } from './components/comprobante/creaeditacomprobante/creaeditacomprobante.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { CreaeditamascotaComponent } from './components/mascota/creaeditamascota/creaeditamascota.component';
import { CreaeditanotificacionComponent } from './components/notificacion/creaeditanotificacion/creaeditanotificacion.component';
import { RoleComponent } from './components/role/role.component';
import { CreaeditaroleComponent } from './components/role/creaeditarole/creaeditarole.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { CreaeditadonacionComponent } from './components/donacion/creaeditadonacion/creaeditadonacion.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageHappyPawsComponent } from './components/landingpage-happy-paws/landingpage-happy-paws.component';
import { segGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'landing',
        component: LandingpageHappyPawsComponent,
    }, 

    {
        path:'usuarios', component:UsersComponent,
        children:[
            {
                path:'nuevo', component:CreaeditauserComponent
            },
            {
                path:'ediciones/:id', component:CreaeditauserComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno
    },
    {
        path:'albergues', component:AlbergueComponent,
        children:[
            {
                path:'nuevo', component:CreaeditaalbergueComponent
            },
            {
                path:'ediciones/:id', component:CreaeditaalbergueComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno
    },
    {
        path:'citas', component:CitaComponent,
        children:[
            {
                path:'nuevo', component:CreaeditacitaComponent
            },
            {
                path:'ediciones/:id', component:CreaeditacitaComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'comentarios', component:ComentarioComponent,
        children:[
            {
                path:'nuevo', component:CreaeditacomentarioComponent
            },
            {
                path:'ediciones/:id', component:CreaeditacomentarioComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'comprobantes', component:ComprobanteComponent,
        children:[
            {
                path:'nuevo', component:CreaeditacomprobanteComponent
            },
            {
                path:'ediciones/:id', component:CreaeditacomprobanteComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'donaciones', component:DonacionComponent,
        children:[
            {
                path:'nuevo', component:CreaeditadonacionComponent
            },
            {
                path:'ediciones/:id', component:CreaeditadonacionComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'mascotas',  component:MascotaComponent,
        children:[
            {
                path:'nuevo', component:CreaeditamascotaComponent
            },
            {
                path:'ediciones/:id', component:CreaeditamascotaComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'notificaciones', component:NotificacionComponent,
        children:[
            {
                path:'nuevo', component:CreaeditanotificacionComponent
            },
            {
                path:'ediciones/:id', component:CreaeditanotificacionComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },
    {
        path:'roles',  component:RoleComponent,
        children:[
            {
                path:'nuevo', component:CreaeditaroleComponent
            },
            {
                path:'ediciones/:id', component:CreaeditaroleComponent
            }
        ],
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada un
    },

    {
        path: 'homes',
        component: HomeComponent,
        canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno
      },
];

