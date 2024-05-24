import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { CustomerModel } from '../../../core/models/customer';
import { CustomersFacade } from '../customers.facade';
import { clienteMockData } from '../../../core/mocks/customers.mock.data';
import { of } from 'rxjs';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let mockStore: MockStore;
  let router: Router;
  let customersFacade: CustomersFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        CustomerComponent,
      ],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    mockStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    customersFacade = TestBed.inject(CustomersFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTitle (Novo cliente)', () => {
    spyOnProperty(router, 'url').and.returnValue('/clientes/novo');
    expect(component.getTitle()).toEqual('Novo cliente');
  });

  it('should call getTitle (Editar cliente)', () => {
    spyOnProperty(router, 'url').and.returnValue('/clientes/editar');
    expect(component.getTitle()).toEqual('Editar cliente');
  });

  it('should call getFormGroup', () => {
    expect(component.getFormGroup(new CustomerModel()).status.value).toEqual('disabled');
  });

  it('should call createForm', () => {
    component.createForm(new CustomerModel());
    expect(component.form.value.status).toEqual('disabled');
  });

  it('should call cancel', () => {
    spyOn(router, 'navigate');
    component.cancel();
    expect(router.navigate).toHaveBeenCalledWith(['clientes']);
  });

  it('should call save', () => {
    spyOn(router, 'navigate');
    spyOn(customersFacade, 'postCustomer').and.returnValue(of(clienteMockData));
    component.save();
    expect(router.navigate).toHaveBeenCalledWith(['clientes']);
  });
});
