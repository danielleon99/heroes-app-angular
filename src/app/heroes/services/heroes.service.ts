import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IHeroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL: string = environment.baseURL;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getHeroes(): Observable<IHeroe[]> {
    return this.httpClient.get<IHeroe[]>(`${this.baseURL}/heroes`);
  }

  getHeroeById(id: string): Observable<IHeroe> {
    return this.httpClient.get<IHeroe>(`${this.baseURL}/heroes/${id}`);
  }

  getAdvice(term: string): Observable<IHeroe[]> {
    return this.httpClient.get<IHeroe[]>(`${this.baseURL}/heroes?q=${term}&limit=5`);
  }
}
