import { Component, OnInit } from '@angular/core';
import { IHeroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img{
    margin-left: 115px;
    height: 300px;
    width: 250px;
    border: 5px;
  }
  `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: IHeroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  }

  constructor(
    private readonly heroesService: HeroesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    if (this.router.url.includes('edit'))
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) =>
            this.heroesService.getHeroeById(id)
          )
        )
        .subscribe(heroe => this.heroe = heroe);
  }

  save() {

    if (this.heroe.superhero)
      if (!this.heroe.id)
        this.heroesService.createHeroe(this.heroe).subscribe(
          heroe => {
            console.log(`Created`, heroe);
            this.router.navigate(['/heroes/list'])
          }
        )
      else
        this.heroesService.updateHeroe(this.heroe).subscribe(
          heroe => {
            console.log(`Updated`, heroe);
          }
        );
  }

  delete() {
    this.heroesService.deleteHeroe(this.heroe.id!).subscribe(
      resp => { console.log(`Deleted`); this.router.navigate(['/heroes/list'])}

    )
  }
}
