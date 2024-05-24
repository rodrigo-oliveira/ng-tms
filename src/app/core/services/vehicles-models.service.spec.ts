import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehicleModelsService } from './vehicle-models.service';
import { VEHICLES_MODELS_API } from '../constants/api.constant';
import { VehicleModelsAdapter } from '../adapters/vehicle-models.adapter';
import { modelosVeiculosMockData } from '../mocks/vehicle-models.mock.data';

describe('VehicleModelsService', () => {
  let service: VehicleModelsService;
  let adapter: VehicleModelsAdapter;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleModelsService]
    });
    service = TestBed.inject(VehicleModelsService);
    adapter = TestBed.inject(VehicleModelsAdapter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all vehicle models', () => {
    service.getAll().subscribe(data => {
      expect(data).toEqual(adapter.adaptArray(modelosVeiculosMockData.items));
    });

    const req = httpTestingController.expectOne(VEHICLES_MODELS_API);
    expect(req.request.method).toEqual('GET');
    req.flush(modelosVeiculosMockData);
  });
});