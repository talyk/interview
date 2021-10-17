import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@shared/services/api/auth.service';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent]
})
export class AuthModule { }
