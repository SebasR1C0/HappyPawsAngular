import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreaeditauserComponent } from './components/users/creaeditauser/creaeditauser.component';
import { AlbergueComponent } from './components/albergue/albergue.component';
import { CreaeditaalbergueComponent } from './components/albergue/creaeditaalbergue/creaeditaalbergue.component';

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
    }
];
