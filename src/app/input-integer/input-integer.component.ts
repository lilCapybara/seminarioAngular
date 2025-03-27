import { Component, Input, OnInit } from '@angular/core';
import { Maqueta } from '../maquetas-list/Maqueta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  constructor(){}

  @Input() maqueta: Maqueta = { name: '', type: '', price: 0, stock: 0, image: '', clearance: true, quantity: 0 }; 


  ngOnInit():void{}

  upQuantity(maqueta:Maqueta) : void{
    if(maqueta.quantity<maqueta.stock)
      maqueta.quantity++;
  }

  downQuantity(maqueta:Maqueta) : void{
    if(maqueta.quantity>0)
      maqueta.quantity--;
  }

}
