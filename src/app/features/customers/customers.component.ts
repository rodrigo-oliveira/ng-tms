import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './customers.component.html'
})
export class CustomersComponent {
  constructor() {}
}
