import { Component } from '@angular/core';
import { MaquetasCartComponent } from "../maquetas-cart/maquetas-cart.component";
import { MaquetasListComponent } from "../maquetas-list/maquetas-list.component";

@Component({
  selector: 'app-maquetas-compra',
  imports: [MaquetasCartComponent, MaquetasListComponent],
  templateUrl: './maquetas-compra.component.html',
  styleUrl: './maquetas-compra.component.scss'
})
export class MaquetasCompraComponent {

}
