import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoButtonModule,
  PoModalAction,
  PoModalComponent,
  PoModalModule,
  PoPageModule,
  PoTableAction,
  PoTableColumnLabel,
  PoTableColumnSpacing,
  PoTableModule,
} from '@po-ui/ng-components';
import { Customer, CustomerId } from '../../../core/models/customer';
import { CustomersFacade } from '../customers.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    AsyncPipe,
    PoPageModule,
    PoButtonModule,
    PoTableModule,
    PoModalModule,
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss',
})
export class CustomersTableComponent implements OnDestroy {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

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
          tooltip: 'Ativo',
        },
        {
          value: 'disabled',
          color: 'color-07',
          label: 'Desativado',
          textColor: 'white',
          tooltip: 'Desativado',
        },
      ],
    },
  ];
  readonly spacing = PoTableColumnSpacing.Medium;
  readonly tableActions: PoTableAction[] = [
    {
      label: 'Editar',
      action: this.onClickEditCustomer.bind(this),
      icon: 'po-icon-edit',
      visible: true,
    },
    {
      label: 'Excluir',
      action: this.onClickRemoveCustomer.bind(this),
      icon: 'po-icon-delete',
      visible: true,
    },
  ];
  deleteCustomerSubscription: Subscription;
  currentCustomerId: CustomerId | null;
  customers$ = this.customersFacade.customers$;

  close: PoModalAction = {
    action: () => this.closeModal(),
    label: 'Cancelar',
    danger: true,
  };

  confirm: PoModalAction = {
    action: () => this.currentCustomerId ? this.deleteCustomer(this.currentCustomerId) : null,
    label: 'Confirmar',
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.deleteCustomerSubscription?.unsubscribe();
  }

  onClickEditCustomer(customer: Customer) {
    this.router.navigate([`editar/${customer.id}`], { relativeTo: this.route });
  }

  onClickRemoveCustomer(customer: Customer) {
    this.currentCustomerId = {
      id: customer.id
    };
    this.poModal.open();
  }

  onClickNewCustomer() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  closeModal() {
    this.poModal.close();
  }

  deleteCustomer(customerId: CustomerId) {
    this.deleteCustomerSubscription = this.customersFacade
      .deleteCustomer(customerId)
      .subscribe((customer) => {
        this.currentCustomerId = null;
        this.poModal.close();
      });
  }
}
