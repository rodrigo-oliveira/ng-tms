import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoButtonModule,
  PoModalAction,
  PoModalComponent,
  PoModalModule,
  PoPageModule,
  PoTableAction,
  PoTableColumnSpacing,
  PoTableModule,
} from '@po-ui/ng-components';
import { VehiclesFacade } from '../vehicles.facade';
import { Vehicle, VehicleId } from '../../../core/models/vehicles';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles-table',
  standalone: true,
  imports: [
    AsyncPipe,
    PoPageModule,
    PoButtonModule,
    PoTableModule,
    PoModalModule,
  ],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss',
})
export class VehiclesTableComponent implements OnDestroy {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  private vehiclesFacade = inject(VehiclesFacade);
  readonly tableColumns = [
    { property: 'id', label: 'Id' },
    { property: 'brand', label: 'Marca' },
    { property: 'model', label: 'Modelo' },
    { property: 'type', label: 'Tipo' },
    { property: 'year', label: 'Ano' },
    { property: 'cargo_capacity_kg', label: 'Capacidade da carga (kg)' },
    {
      property: 'average_consumption_km_per_liter',
      label: 'Consumo médio por litro (Km)',
    },
    { property: 'fuel_type', label: 'Combustível' },
  ];
  readonly spacing = PoTableColumnSpacing.Medium;
  readonly tableActions: PoTableAction[] = [
    {
      label: 'Editar',
      action: this.onClickEditVehicle.bind(this),
      icon: 'po-icon-edit',
      visible: true,
    },
    {
      label: 'Excluir',
      action: this.onClickDeleteVehicle.bind(this),
      icon: 'po-icon-delete',
      visible: true,
    },
  ];
  deleteVehicleSubscription: Subscription;
  currentVehicleId: VehicleId | null;
  vehicles$ = this.vehiclesFacade.vehicles$;

  close: PoModalAction = {
    action: () => this.closeModal(),
    label: 'Cancelar',
    danger: true,
  };

  confirm: PoModalAction = {
    action: () => this.currentVehicleId ? this.deleteVehicle(this.currentVehicleId) : null,
    label: 'Confirmar',
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.deleteVehicleSubscription?.unsubscribe();
  }

  onClickEditVehicle(vehicle: Vehicle) {
    this.router.navigate([`editar/${vehicle.id}`], { relativeTo: this.route });
  }

  onClickDeleteVehicle(vehicle: Vehicle) {
    this.currentVehicleId = {
      id: vehicle.id,
    };
    this.poModal.open();
  }

  onClickNewVehicle() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  closeModal() {
    this.poModal.close();
  }

  deleteVehicle(vehicleId: VehicleId) {
    this.deleteVehicleSubscription = this.vehiclesFacade
      .deleteVehicle(vehicleId)
      .subscribe((vehicle) => {
        this.currentVehicleId = null;
        this.poModal.close();
      });
  }
}
