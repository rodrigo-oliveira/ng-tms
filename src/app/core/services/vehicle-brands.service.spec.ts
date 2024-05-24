import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehicleBrandsService } from './vehicle-brands.service';
import { VEHICLES_BRANDS_API } from '../constants/api.constant';
import { VehicleBrandsAdapter } from '../adapters/vehicle-brands.adapter';
import { marcasVeiculosMockData } from '../mocks/vehicle-brands.mock.data';

describe('VehicleBrandsService', () => {
  let service: VehicleBrandsService;
  let adapter: VehicleBrandsAdapter;
  let httpTestingController: HttpTestingController;
  const customerId = {
    id: '1'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleBrandsService]
    });
    service = TestBed.inject(VehicleBrandsService);
    adapter = TestBed.inject(VehicleBrandsAdapter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all vehicle brands', () => {
    service.getAll().subscribe(data => {
      expect(data).toEqual(adapter.adaptArray(marcasVeiculosMockData.items));
    });

    const req = httpTestingController.expectOne(VEHICLES_BRANDS_API);
    expect(req.request.method).toEqual('GET');
    req.flush(marcasVeiculosMockData);
  });
});