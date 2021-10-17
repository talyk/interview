import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => (await import('@views/auth/auth.module')).AuthModule,
  },
  {
    path: 'heroes',
    loadChildren: async () => (await import('@views/heroes/heroes.module')).HeroesModule,
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  },
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
