import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoButtonModule, PoDividerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { CustomersService } from '../../../core/services/customers.service';
import { Customer, ICustomer } from '../../../core/models/customer';

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
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Clientes', link: '/clientes' }, { label: 'Novo cliente' }]
  };
  form = this.formBuilder.group(this.getFormGroup(new Customer()));
  customerId = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params['id'] || '';

    if (this.customerId !== '') {
      this.customersService.get(this.customerId).subscribe(user => {
        console.log(user);
        this.createForm(user);
      });
    }
  }

  getFormGroup(user: ICustomer) {
    return {
      id: new FormControl(user.id),
      name: new FormControl(user.name, [ Validators.required, Validators.minLength(10) ]),
      document: new FormControl(user.document, [ Validators.required, Validators.minLength(10) ]),
      status: new FormControl(user.status, [])
    };
  }

  createForm(user: ICustomer): void {
    this.form = this.formBuilder.group(this.getFormGroup(user))
  }

  cancel(): void {
    this.router.navigate(['clientes']);
  }

  save(): void {
    if (this.form.valid) {
      this.router.navigate(['clientes']);
    }
  }
}
