import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IHeroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getHeroes(): Observable<IHeroe[]> {
    return this.httpClient.get<IHeroe[]>('http://localhost:3000/heroes');
  }

  getHeroeById(id: string): Observable<IHeroe> {
    return this.httpClient.get<IHeroe>(`http://localhost:3000/heroes/${id}`);
  }
}
