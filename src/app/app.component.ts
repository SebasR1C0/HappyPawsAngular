import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AlbergueComponent } from './components/albergue/albergue.component';
import { UsersComponent } from './components/users/users.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbergueComponent, UsersComponent,MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HappyPawsAngular';
}
