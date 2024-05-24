import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomersService } from './customers.service';
import { clienteMockData, clientesMockData, customerMockData } from '../mocks/customers.mock.data';
import { CostumersAdapter } from '../adapters/customers.adapter';
import { CUSTOMERS_API, CUSTOMERS_DELETE_API, CUSTOMERS_SEND_API } from '../constants/api.constant';

describe('CustomersService', () => {
  let service: CustomersService;
  let adapter: CostumersAdapter;
  let httpTestingController: HttpTestingController;
  const customerId = {
    id: '1'
  };

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
    service.getAll().subscribe(data => {
      expect(data).toEqual(adapter.adaptArray(clientesMockData.items));
    });

    const req = httpTestingController.expectOne(CUSTOMERS_API);
    expect(req.request.method).toEqual('GET');
    req.flush(clientesMockData);
  });

  it('should post customer', () => {
    service.postCustomer(customerMockData).subscribe(data => {
      expect(data).toEqual(clienteMockData);
    });

    const req = httpTestingController.expectOne(CUSTOMERS_SEND_API);
    expect(req.request.method).toEqual('POST');
    req.flush(clienteMockData);
  });

  it('should delete customer', () => {
    service.deleteCustomer(customerId).subscribe(data => {
      expect(data).toEqual(customerId);
    });

    const req = httpTestingController.expectOne(CUSTOMERS_DELETE_API);
    expect(req.request.method).toEqual('POST');
    req.flush(customerId);
  });
});