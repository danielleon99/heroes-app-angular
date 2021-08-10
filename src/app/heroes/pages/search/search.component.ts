import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: IHeroe[] = [];

  constructor(private readonly heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroeService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  };


}
