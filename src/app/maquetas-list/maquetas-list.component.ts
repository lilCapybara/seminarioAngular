import { Component } from '@angular/core';
import { Maqueta } from './Maqueta';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";


@Component({
  selector: 'app-maquetas-list',
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './maquetas-list.component.html',
  styleUrl: './maquetas-list.component.scss'
})


export class MaquetasListComponent {

  constructor(){}

  ngOnInit():void{}

  maquetas: Maqueta[] = 
  [
    {
      name : "VCarb 2025",
      type : "F1",
      price : 1200,
      stock : 3,
      image : "assets/img/vcarb2025.jpg",
      clearance : false,
      quantity : 0,
     },

    {
      name: "Zenitsu",
      type: "Anime",
      price: 500,
      stock: 10,
      image : "",
      clearance : true,
      quantity : 0,
    },

    {
      name: "Tanjiro",
      type: "Anime",
      price: 500,
      stock: 0,
      image : "",
      clearance : false,
      quantity : 0,
    },

    {
      name: "Inosuke",
      type: "Anime",
      price: 500,
      stock: 13,
      image : "",
      clearance : false,
      quantity : 0,
    },
  ];
  
}
