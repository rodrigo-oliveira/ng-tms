import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';

import {
  PoAvatarModule,
  PoLoadingModule,
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { LoadingComponent } from './shared/components/loading/loading.component';

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
    PoLoadingModule,
    HttpClientModule,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = false;
  readonly menus: Array<PoMenuItem> = [
    { label: 'Início', icon: 'po-icon-home', action: this.onClick.bind(this, '') },
    { label: 'Clientes', icon: 'po-icon-users', action: this.onClick.bind(this , 'clientes'), subItems: [
      {
        label: 'Novo cliente',
        icon: 'po-icon-users',
        action: this.onClick.bind(this, 'clientes/novo')
      }
    ] },
    { label: 'Veículos', icon: 'po-icon-truck', action: this.onClick.bind(this, 'veiculos') },
    { label: 'Locais',icon: 'po-icon-pin',  action: this.onClick.bind(this, 'locais') },
    { label: 'Rotas', icon: 'po-icon-map', action: this.onClick.bind(this, 'rotas') },
    { label: 'Cargas', icon: 'po-icon-pushcart', action: this.onClick.bind(this, 'cargas') },
  ];

  constructor(private router: Router) {
    router.events.subscribe(
      (event): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading  = false;
        }
      }
    );
  }

  private onClick(route: string) {
    this.router.navigate([route]);
  }
}
