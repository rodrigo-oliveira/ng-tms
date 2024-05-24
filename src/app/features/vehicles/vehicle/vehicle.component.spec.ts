import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { VehicleModel } from '../../../core/models/vehicles';
import { VehiclesFacade } from '../vehicles.facade';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { veiculoMockData } from '../../../core/mocks/vehicles.mock.data';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let mockStore: MockStore;
  let router: Router;
  let vehiclesFacade: VehiclesFacade;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        VehicleComponent,
      ],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    mockStore = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    vehiclesFacade = TestBed.inject(VehiclesFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call getTitle (Novo veículo)', () => {
    spyOnProperty(router, 'url').and.returnValue('/veiculos/novo');
    expect(component.getTitle()).toEqual('Novo veículo');
  });

  it('should call getTitle (Editar veículo)', () => {
    spyOnProperty(router, 'url').and.returnValue('/veiculos/editar');
    expect(component.getTitle()).toEqual('Editar veículo');
  });

  it('should call getFormGroup', () => {
    expect(component.getFormGroup(new VehicleModel()).id.value).toEqual(null);
  });

  it('should call createForm', () => {
    component.createForm(new VehicleModel());
    expect(component.form.value.id).toEqual(null);
  });

  it('should call cancel', () => {
    spyOn(router, 'navigate');
    component.cancel();
    expect(router.navigate).toHaveBeenCalledWith(['veiculos']);
  });

  it('should call save', () => {
    spyOn(router, 'navigate');
    spyOn(vehiclesFacade, 'postVehicle').and.returnValue(of(veiculoMockData));
    component.save();
    expect(router.navigate).toHaveBeenCalledWith(['veiculos']);
  });

  it('should call onSelectBrand', () => {
    spyOn(vehiclesFacade, 'loadVehicleModels');
    component.onSelectBrand(1);
    expect(vehiclesFacade.loadVehicleModels).toHaveBeenCalled();
  });
});
