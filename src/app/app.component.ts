import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaquetasListComponent } from "./maquetas-list/maquetas-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MaquetasListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KodaCraft';
}
