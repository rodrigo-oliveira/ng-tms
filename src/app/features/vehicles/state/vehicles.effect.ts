import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { vehiclesActions } from "./vehicles.actions";
import { VehiclesService } from "../../../core/services/vehicles.service";
import { VehicleBrandsService } from "../../../core/services/vehicle-brands.service";
import { VehicleModelsService } from "../../../core/services/vehicle-models.service";

export const loadVehiclesEffect = createEffect(
  (actions$ = inject(Actions), vehiclesService = inject(VehiclesService)) => {
    return actions$
      .pipe(
        ofType(vehiclesActions.loadVehicles),
        tap(() => console.log('Load vehicles')),
        switchMap(() => vehiclesService.getAll()
          .pipe(
            tap(() => console.log('Load vehicles success')),
            map(vehicles => vehiclesActions.loadVehiclesSuccess({ vehicles }))
          )
        )
      )
  }, { functional: true }
);

export const loadVehiclesBrandsEffect = createEffect(
  (actions$ = inject(Actions), vehicleBrandsService = inject(VehicleBrandsService)) => {
    return actions$
      .pipe(
        ofType(vehiclesActions.loadVehicleBrands),
        tap(() => console.log('Load vehicle brands')),
        switchMap(() => vehicleBrandsService.getAll()
          .pipe(
            tap(() => console.log('Load vehicles brands success')),
            map(vehicleBrands => vehiclesActions.loadVehiclesBrandsSuccess({ vehicleBrands }))
          )
        )
      )
  }, { functional: true }
)

export const loadVehiclesModelsEffect = createEffect(
  (actions$ = inject(Actions), vehicleModelsService = inject(VehicleModelsService)) => {
    return actions$
      .pipe(
        ofType(vehiclesActions.loadVehicleModels),
        tap(() => console.log('Load vehicle models')),
        switchMap(() => vehicleModelsService.getAll()
          .pipe(
            tap(() => console.log('Load vehicles models success')),
            map(vehicleModels => vehiclesActions.loadVehicleModelsSuccess({ vehicleModels }))
          )
        )
      )
  }, { functional: true }
)