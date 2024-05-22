import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoButtonModule, PoPageModule, PoTableAction, PoTableColumnLabel, PoTableColumnSpacing, PoTableModule } from '@po-ui/ng-components';
import { BehaviorSubject } from 'rxjs';
import { CustomersService } from '../../../core/services/customers.service';
import { ICustomer } from '../../../core/models/customer';


@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    PoPageModule,
    PoButtonModule,
    PoTableModule
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss'
})
export class CustomersTableComponent implements OnInit {
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

  constructor(private router: Router, private route: ActivatedRoute, private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.getAll().subscribe(customers => {
      this.items$.next(customers);
    });

    //setTimeout(() => {this.items$.next([])}, 3000)
  }

  onClickCustomerDetails(customer: ICustomer) {
    this.router.navigate([`editar/${customer.id}`], { relativeTo: this.route });
  }

  onClickNewCustomer() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
