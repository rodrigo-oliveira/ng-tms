import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoButtonModule,
  PoDividerModule,
  PoFieldModule,
  PoPageModule,
} from '@po-ui/ng-components';
import { CustomerModel, Customer } from '../../../core/models/customer';
import { CustomersFacade } from '../customers.facade';
import { TmsValidators } from '../../../shared/validators/validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoDividerModule
  ],
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit, OnDestroy {
  customersFacade = inject(CustomersFacade);
  form = this.formBuilder.group(this.getFormGroup(new CustomerModel()));
  title = '';
  routerUrl = '';
  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Clientes', link: '/clientes' },
      { label: '' },
    ],
  };
  customerIdSubscription: Subscription;
  customerSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const customerId = this.activatedRoute.snapshot.params['id'] || '';

    this.title = this.getTitle();
    this.breadcrumb.items[1].label = this.getTitle();
    this.routerUrl = this.router.url;

    if (customerId !== '') {
      this.customerIdSubscription = this.customersFacade.getCustomerById(customerId).subscribe(customer => {
        this.createForm(customer);
      });
    }
  }

  ngOnDestroy(): void {
    this.customerIdSubscription?.unsubscribe();
    this.customerSubscription?.unsubscribe();
  }

  getTitle() {
    return this.router.url === '/clientes/novo' ? 'Novo cliente' : 'Editar cliente';
  }

  getFormGroup(user: Customer) {
    return {
      id: new FormControl(user.id),
      name: new FormControl(user.name, [
        Validators.required,
        Validators.minLength(10),
        TmsValidators.fullName
      ]),
      document: new FormControl(user.document, [
        Validators.required,
        TmsValidators.cpfCnpj
      ]),
      status: new FormControl(user.status, []),
    };
  }

  createForm(user: Customer): void {
    this.form = this.formBuilder.group(this.getFormGroup(user));
  }

  cancel(): void {
    this.router.navigate(['clientes']);
  }

  save(): void {
    this.customerSubscription = this.customersFacade.postCustomer(this.form.value as Customer).subscribe(data => {
      this.router.navigate(['clientes']);
    });
  }
}
