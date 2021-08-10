import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(
    private readonly heroesService: HeroesService
  ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
