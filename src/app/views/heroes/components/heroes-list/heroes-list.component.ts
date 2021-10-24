import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import { HeroesService } from '../../../../shared/services/api/heroes.service';
import { Observable } from 'rxjs';
import { LogService } from '../../../../shared/services/log.service';
import { Hero } from '@shared/models';
import { tap } from 'rxjs/operators';
import { AuthService } from '@shared/services/api';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent implements OnInit {
    heroes$: Observable<Hero[]>;
 
    constructor(
        private heroesService: HeroesService,
        private logger: LogService,
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        this.heroes$ = this.heroesService.getHeroes()
            .pipe(tap((heroes) => this.logger.debug('getHeroes', 'heroes list', heroes)));
    }
}