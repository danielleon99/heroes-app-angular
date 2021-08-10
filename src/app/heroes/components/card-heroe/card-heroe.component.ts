import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styles: [
    `
    mat-card{
      margin-top:10px;
    }
    `
  ]
})
export class CardHeroeComponent implements OnInit {

  @Input()
  heroe!: IHeroe;

  constructor() { }

  ngOnInit(): void {
  }

}
