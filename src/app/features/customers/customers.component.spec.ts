import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { CustomersFacade } from './customers.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CustomersService } from '../../core/services/customers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let facade: CustomersFacade;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CustomersComponent,
        HttpClientTestingModule
      ],
      providers: [
        CustomersFacade,
        CustomersService,
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    facade = TestBed.inject(CustomersFacade);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadCustomers method on ngOnInit', () => {
    spyOn(facade, 'loadCustomers');
    component.ngOnInit();
    expect(facade.loadCustomers).toHaveBeenCalled();
  });
});
