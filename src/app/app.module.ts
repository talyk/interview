import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:[CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
