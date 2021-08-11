import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: IHeroe[]): IHeroe[] {
    return heroes.sort(
      (a, b) => {
        return (a.superhero > b.superhero) ? 1 : -1;
      })
  }
}
