import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVehicleById, vehicleBrandsSelector, vehicleModelsSelector, vehiclesSelector } from './state/vehicles.selectors';
import { vehiclesActions } from './state/vehicles.actions';
import { Vehicle } from '../../core/models/vehicles';
import { VehicleBrand } from '../../core/models/vehicle-brand';
import { PoSelectOption } from '@po-ui/ng-components';
import { OPTIONS_VEHICLE_FUEL_TYPES, OPTIONS_VEHICLE_TYPES } from '../../core/constants/options.constant';
import { VehicleModelName } from '../../core/models/vehicle-model';
import { VehiclesService } from '../../core/services/vehicles.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesFacade {
    private store = inject(Store);
    private vehiclesService = inject(VehiclesService);

    get vehicles$(): Observable<Vehicle[]> {
      return this.store.select(vehiclesSelector);
    }

    get vehicleBrands$(): Observable<VehicleBrand[]> {
      return this.store.select(vehicleBrandsSelector).pipe(
        map(brands => 
          brands.map(item =>{
            return {
              id: item.id,
              brand: item.brand
            };
          }))
      );
    }

    get vehicleModels$(): Observable<VehicleModelName[]> {
      return this.store.select(vehicleModelsSelector).pipe(
        map(models => 
          models.map(item =>{
            return {
              id: item.id,
              model: item.model
            };
          }))
      );
    }

    get vehicleFuelTypes$(): Observable<PoSelectOption[]> {
      return of(OPTIONS_VEHICLE_FUEL_TYPES);
    }

    get vehicleTypes$(): Observable<PoSelectOption[]> {
      return of(OPTIONS_VEHICLE_TYPES);
    }

    getVehicleById(id:number): Observable<Vehicle> {
      return this.store.select(selectVehicleById(id));
    }

    loadVehicles() {
      this.store.dispatch(vehiclesActions.loadVehicles());
    }

    loadVehicleBrands() {
      this.store.dispatch(vehiclesActions.loadVehicleBrands());
    }
  
    loadVehicleModels() {
      this.store.dispatch(vehiclesActions.loadVehicleModels());
    }

    postVehicle(vehicle: Vehicle) {
      return this.vehiclesService.postVehicle(vehicle);
    }
}