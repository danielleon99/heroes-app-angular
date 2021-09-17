import { Component, OnInit } from '@angular/core';
import { IHeroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
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
            this.showSnackBar('Register created')
          }
        )
      else
        this.heroesService.updateHeroe(this.heroe).subscribe(
          heroe => {
            console.log(`Updated`, heroe);
            this.router.navigate(['/heroes/list'])
            this.showSnackBar('Register updated')
          }
        );
  }

  delete() {
    this.heroesService.deleteHeroe(this.heroe.id!).subscribe(
      resp => { console.log(`Deleted`); this.router.navigate(['/heroes/list']) }

    )
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    });
  };
}
