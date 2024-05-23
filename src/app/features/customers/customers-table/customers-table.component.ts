import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoButtonModule, PoPageModule, PoTableAction, PoTableColumnLabel, PoTableColumnSpacing, PoTableModule } from '@po-ui/ng-components';
import { Customer } from '../../../core/models/customer';
import { CustomersFacade } from '../customers.facade';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    AsyncPipe,
    PoPageModule,
    PoButtonModule,
    PoTableModule
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss'
})
export class CustomersTableComponent {
  private customersFacade = inject(CustomersFacade);
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
  readonly spacing = PoTableColumnSpacing.Medium;
  readonly tableActions: PoTableAction[] = [
    {
      label: 'Editar',
      action: this.onClickCustomerDetails.bind(this),
      icon: 'po-icon-edit'
    }
  ];
  customers$ = this.customersFacade.customers$;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClickCustomerDetails(customer: Customer) {
    this.router.navigate([`editar/${customer.id}`], { relativeTo: this.route });
  }

  onClickNewCustomer() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
