import { Component, Input, OnInit, Output } from '@angular/core';
import { Maqueta } from '../maquetas-list/Maqueta';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  constructor(){}

  @Input() quantity : number; //EL input hace que funcionen los corchetes

  @Input() max : number;

  @Output() quantityChange : EventEmitter <number> = new EventEmitter <number>(); //EL output hace que funcionen los partentesis


  ngOnInit():void{}

  upQuantity() : void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() : void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
