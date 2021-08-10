import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  heroeSelected: IHeroe | undefined;

  constructor(private readonly heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroeService.getAdvice(this.term.trim()).subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  };

  optionSelected(event: MatAutocompleteSelectedEvent) {

    if (event.option.value) {
      const heroe: IHeroe = event.option.value;
      this.term = heroe.superhero;
      this.heroeService.getHeroeById(heroe.id!).subscribe(heroe => this.heroeSelected = heroe);
    }
    else
      this.heroeSelected = undefined;
  }
}
