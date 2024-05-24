import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomersService } from './customers.service';
import { customersMockData } from '../mocks/customers.mock.data';
import { CostumersAdapter } from '../adapters/customers.adapter';
import { CUSTOMERS_API } from '../constants/api.constant';

describe('CustomersService', () => {
  let service: CustomersService;
  let adapter: CostumersAdapter;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomersService]
    });
    service = TestBed.inject(CustomersService);
    adapter = TestBed.inject(CostumersAdapter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all customers', () => {
    service.getAll().subscribe(customers => {
      expect(customers).toEqual(adapter.adaptArray(customersMockData.items));
    });

    const req = httpTestingController.expectOne(CUSTOMERS_API);
    expect(req.request.method).toEqual('GET');
    req.flush(customersMockData);
  });
});