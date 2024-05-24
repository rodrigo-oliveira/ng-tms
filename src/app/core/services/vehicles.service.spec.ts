import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehiclesService } from './vehicles.service';
import { VEHICLES_API, VEHICLES_DELETE_API, VEHICLES_SEND_API } from '../constants/api.constant';
import { VehiclesAdapter } from '../adapters/vehicles.adapter';
import { vehicleMockData, veiculoMockData, veiculosMockData } from '../mocks/vehicles.mock.data';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let adapter: VehiclesAdapter;
  let httpTestingController: HttpTestingController;
  const vehicleId = {
    id: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiclesService]
    });
    service = TestBed.inject(VehiclesService);
    adapter = TestBed.inject(VehiclesAdapter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all vehicles', () => {
    service.getAll().subscribe(data => {
      expect(data).toEqual(adapter.adaptArray(veiculosMockData.items));
    });

    const req = httpTestingController.expectOne(VEHICLES_API);
    expect(req.request.method).toEqual('GET');
    req.flush(veiculosMockData);
  });

  it('should post vehicles', () => {
    service.postVehicle(vehicleMockData).subscribe(data => {
      expect(data).toEqual(veiculoMockData);
    });

    const req = httpTestingController.expectOne(VEHICLES_SEND_API);
    expect(req.request.method).toEqual('POST');
    req.flush(veiculoMockData);
  });

  it('should delete vehicles', () => {
    service.deleteVehicle(vehicleId).subscribe(data => {
      expect(data).toEqual(vehicleId);
    });

    const req = httpTestingController.expectOne(VEHICLES_DELETE_API);
    expect(req.request.method).toEqual('POST');
    req.flush(vehicleId);
  });
});