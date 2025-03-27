import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaquetasListComponent } from "./maquetas-list/maquetas-list.component";
import { FormsModule } from '@angular/forms';
import { MaquetasCartComponent } from "./maquetas-cart/maquetas-cart.component";
import { MaquetasAboutComponent } from "./maquetas-about/maquetas-about.component";
import { MaquetasCompraComponent } from "./maquetas-compra/maquetas-compra.component";
import { InputIntegerComponent } from './input-integer/input-integer.component';

@Component({
  selector: 'app-root',
  imports: [InputIntegerComponent,RouterLink,RouterOutlet,MaquetasListComponent, FormsModule, MaquetasCartComponent, MaquetasAboutComponent, MaquetasCompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KodaCraft';
}
