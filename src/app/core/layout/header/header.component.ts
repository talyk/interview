import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('coach') coach: string;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }
}
