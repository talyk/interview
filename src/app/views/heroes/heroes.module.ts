import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesService } from '../../shared/services/api/heroes.service';
import { HeroCardComponent } from './components/heroes-list/hero-card/hero-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent
  ],
  imports: [CommonModule, HeroesRoutingModule, SharedModule],
  providers: [HeroesService],
})
export class HeroesModule {}
