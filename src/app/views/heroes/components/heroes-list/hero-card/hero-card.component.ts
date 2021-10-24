import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '@shared/models';
import { LogService } from '@shared/services/log.service';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
    @Input('hero') hero: Hero;
    @Input('coach') coach: string;
    isTrainingStarted: boolean = false;

    constructor(private logger: LogService) { }

    ngOnInit(): void { 
        console.log(this.coach);
    }

    onStartTraining(): void {
        this.isTrainingStarted = true;
        this.logger.debug("Start trainging...", 'Hero-card', this.isTrainingStarted);
    }
}
