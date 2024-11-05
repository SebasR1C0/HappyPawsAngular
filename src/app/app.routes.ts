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

export const routes: Routes = [
    {
        path:'usuarios', component:UsersComponent,
        children:[
            {
                path:'nuevo', component:CreaeditauserComponent
            },
            {
                path:'ediciones/:id', component:CreaeditauserComponent
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];
