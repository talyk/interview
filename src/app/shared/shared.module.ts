import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from '../core/layout/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, HeaderComponent],
  providers: [],
})
export class SharedModule {}
