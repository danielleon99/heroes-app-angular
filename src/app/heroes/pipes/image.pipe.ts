import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: IHeroe): string {

    const path: string = 'assets/heroes/';

    if (heroe.id)
      return `assets/heroes/${heroe.id}.jpg`

    return `assets/no-image.png`
  }

}
