import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {
  PoAvatarComponent,
  PoAvatarModule,
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoAvatarModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {

  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Início', icon: 'po-icon-home', action: this.onClick.bind(this, '') },
    { label: 'Clientes', icon: 'po-icon-users', action: this.onClick.bind(this , 'clientes') },
    { label: 'Veículos', icon: 'po-icon-truck', action: this.onClick.bind(this, 'veiculos') },
    { label: 'Locais',icon: 'po-icon-pin',  action: this.onClick.bind(this, 'locais') },
    { label: 'Rotas', icon: 'po-icon-map', action: this.onClick.bind(this, 'rotas') },
    { label: 'Cargas', icon: 'po-icon-pushcart', action: this.onClick.bind(this, 'cargas') },
  ];

  private onClick(route: string) {
    this.router.navigate([route]);
  }
}
