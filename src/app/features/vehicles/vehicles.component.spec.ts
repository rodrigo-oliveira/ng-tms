import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesFacade } from './vehicles.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../../core/services/vehicles.service';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let vehicleFacade: VehiclesFacade;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        VehiclesComponent
      ],
      providers: [
        VehiclesFacade,
        VehiclesService,
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    vehicleFacade = TestBed.inject(VehiclesFacade);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
