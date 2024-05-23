import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ PoMenuModule ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Início',
      icon: 'po-icon-home',
      action: this.onClick.bind(this, ''),
    },
    {
      label: 'Clientes',
      icon: 'po-icon-users',
      action: this.onClick.bind(this, 'clientes'),
      subItems: [
        {
          label: 'Novo cliente',
          icon: 'po-icon-users',
          action: this.onClick.bind(this, 'clientes/novo'),
        },
      ],
    },
    {
      label: 'Veículos',
      icon: 'po-icon-truck',
      action: this.onClick.bind(this, 'veiculos'),
    },
    {
      label: 'Locais',
      icon: 'po-icon-pin',
      action: this.onClick.bind(this, 'locais'),
    },
    {
      label: 'Rotas',
      icon: 'po-icon-map',
      action: this.onClick.bind(this, 'rotas'),
    },
    {
      label: 'Cargas',
      icon: 'po-icon-pushcart',
      action: this.onClick.bind(this, 'cargas'),
    },
  ];

  constructor(private router: Router) {}

  private onClick(route: string) {
    this.router.navigate([route]);
  }
}
