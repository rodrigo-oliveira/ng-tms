import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoButtonModule,
  PoDividerModule,
  PoFieldModule,
  PoPageModule,
} from '@po-ui/ng-components';
import { VehiclesFacade } from '../vehicles.facade';
import { Vehicle, VehicleModel } from '../../../core/models/vehicles';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoDividerModule
  ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss',
})
export class VehicleComponent implements OnInit, OnDestroy {
  vehiclesFacade = inject(VehiclesFacade);
  form = this.formBuilder.group(this.getFormGroup(new VehicleModel()));
  title = '';
  routerUrl = '';
  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Veículos', link: '/veiculos' },
      { label: '' },
    ],
  };
  vehicleBrands$ = this.vehiclesFacade.vehicleBrands$;
  vehicleTypes$ = this.vehiclesFacade.vehicleTypes$;
  vehicleFuelTypes$ = this.vehiclesFacade.vehicleFuelTypes$;
  vehicleModels$ = this.vehiclesFacade.vehicleModels$;
  vehicle: Vehicle;
  vehicleSubscription: Subscription;
  vehicleByIdSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const vehicleId = Number(this.activatedRoute.snapshot.params['id']);

    this.title = this.getTitle();
    this.breadcrumb.items[1].label = this.getTitle();
    this.routerUrl = this.router.url;
    this.vehiclesFacade.loadVehicleBrands();
    this.vehiclesFacade.loadVehicleModels();

    if (vehicleId) {
      this.vehicleByIdSubscription = this.vehiclesFacade.getVehicleById(vehicleId).subscribe(vehicle => {
        this.createForm(vehicle);
        this.vehicle = vehicle;
      });
    }
  }

  ngOnDestroy(): void {
    this.vehicleSubscription?.unsubscribe();
    this.vehicleByIdSubscription?.unsubscribe();
  }

  getTitle() {
    return this.router.url === '/veiculos/novo' ? 'Novo veículo' : 'Editar veículo';
  }

  getFormGroup(vehicle: Vehicle) {
    return {
      id: new FormControl(vehicle.id),
      brand: new FormControl(vehicle.brand, [
        Validators.required
      ]),
      model: new FormControl(vehicle.model, [
        Validators.required
      ]),
      type: new FormControl(vehicle.type, [
        Validators.required
      ]),
      year: new FormControl(vehicle.year, [
        Validators.required
      ]),
      cargo_capacity_kg: new FormControl(vehicle.cargo_capacity_kg, [
        Validators.required
      ]),
      average_consumption_km_per_liter: new FormControl(vehicle.average_consumption_km_per_liter, [
        Validators.required
      ]),
      fuel_type: new FormControl(vehicle.fuel_type, [
        Validators.required
      ])
    };
  }

  createForm(vehicle: Vehicle) {
    this.form = this.formBuilder.group(this.getFormGroup(vehicle));
  }

  cancel(): void {
    this.router.navigate(['veiculos']);
  }

  save(): void {
    this.vehicleSubscription = this.vehiclesFacade.postVehicle(this.form.value as Vehicle).subscribe(data=> {
      this.router.navigate(['veiculos']);
    });
  }

  onSelectBrand(brandId: number){
    this.vehiclesFacade.loadVehicleModels();
  }
}
