import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heroes, Hero } from '@shared/models';

@Injectable()
export class HeroesService {
    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Heroes>('assets/mock/mock.json').pipe(
            map((result) => result.heroes.sort((a, b) => b.current_power - a.current_power))
        );
    }
}
