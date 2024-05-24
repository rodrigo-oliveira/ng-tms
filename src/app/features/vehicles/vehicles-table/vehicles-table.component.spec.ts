import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { VehiclesFacade } from '../vehicles.facade';
import { VehiclesService } from '../../../core/services/vehicles.service';
import { VehiclesTableComponent } from './vehicles-table.component';
import {
  PoButtonModule,
  PoModalModule,
  PoPageModule,
  PoTableModule,
} from '@po-ui/ng-components';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../../core/models/vehicles';
import { of } from 'rxjs';

describe('VehiclesTableComponent', () => {
  let component: VehiclesTableComponent;
  let fixture: ComponentFixture<VehiclesTableComponent>;
  let vehiclesFacade: VehiclesFacade;
  let mockStore: MockStore;
  let router: Router;
  let route: ActivatedRoute;
  const vehicleId = { id: 1 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        VehiclesTableComponent,
      ],
      providers: [VehiclesFacade, VehiclesService, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesTableComponent);
    vehiclesFacade = TestBed.inject(VehiclesFacade);
    mockStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClickEditVehicle', () => {
    spyOn(router, 'navigate');
    component.onClickEditVehicle(vehicleId as Vehicle);
    expect(router.navigate).toHaveBeenCalledWith(['editar/1'], { relativeTo: route });
  });

  it('should call onClickDeleteVehicle', () => {
    spyOn(component.poModal, 'open');
    component.onClickDeleteVehicle(vehicleId as Vehicle);
    expect(component.poModal.open).toHaveBeenCalled();
  });

  it('should call onClickNewVehicle', () => {
    spyOn(router, 'navigate');
    component.onClickNewVehicle();
    expect(router.navigate).toHaveBeenCalledWith(['novo'], { relativeTo: route });
  });

  it('should call closeModal', () => {
    spyOn(component.poModal, 'close');
    component.closeModal();
    expect(component.poModal.close).toHaveBeenCalled();
  });

  it('should call deleteVehicle', () => {
    spyOn(vehiclesFacade, 'deleteVehicle').and.returnValue(of(vehicleId));
    component.deleteVehicle(vehicleId);
    expect(vehiclesFacade.deleteVehicle).toHaveBeenCalledWith(vehicleId);
  });
});
