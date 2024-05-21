import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoButtonModule, PoPageModule, PoTableAction, PoTableColumnLabel, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction, PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { ICustomer } from '../../core/models/customer';
import { CustomersService } from '../../core/services/customers.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule,
    PoButtonModule,
    PoTableModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  readonly tableColumns = [
    { property: 'id', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'document', label: 'Documento' },
    {
      property: 'status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: 'active',
          color: 'color-11',
          label: 'Ativo',
          textColor: 'white',
          tooltip: 'Ativo'
        },
        {
          value: 'disabled',
          color: 'color-07',
          label: 'Desativado',
          textColor: 'white',
          tooltip: 'Desativado'
        }
      ]
    },
  ];
  readonly tableActions: PoTableAction[] = [
    {
      label: 'Details',
      action: this.onClickCustomerDetails.bind(this),
      icon: 'po-icon-edit'
    },
    {
      label: 'Excluir',
      action: () => {},
      icon: 'po-icon-delete'
    }
  ];
  items$ = new BehaviorSubject<ICustomer[]>([] || null);
  isLoading = true;

  constructor(private router: Router, private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.getAll().subscribe(customers => {
      this.items$.next(customers);
      this.isLoading = false;
    });
  }

  onClickCustomerDetails(customer: ICustomer) {
    this.router.navigate([`clientes/editar/${customer.id}`]);
  }

  onClickNewCustomer() {
    this.router.navigate(['clientes/novo']);
  }
}
