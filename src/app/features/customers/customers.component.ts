import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersFacade } from './customers.facade';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  customersFacade = inject(CustomersFacade);

  ngOnInit(): void {
    this.customersFacade.loadCustomers();
  }
}
