import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from '../../interfaces/heroe.interface';

import { switchMap } from 'rxjs/operators'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  @Input()
  heroe!: IHeroe;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly heroeService: HeroesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => 
      this.heroeService.getHeroeById(id)))
      .subscribe( heroe => this.heroe = heroe);
  }

}
