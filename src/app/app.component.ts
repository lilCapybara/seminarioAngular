import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaquetasListComponent } from "./maquetas-list/maquetas-list.component";

@Component({
  selector: 'app-root',
  imports: [MaquetasListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KodaCraft';
}
