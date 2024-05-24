import { AsyncPipe } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoButtonModule, PoModalAction, PoModalComponent, PoModalModule, PoPageModule, PoTableAction, PoTableColumnLabel, PoTableColumnSpacing, PoTableModule } from '@po-ui/ng-components';
import { VehiclesFacade } from '../vehicles.facade';
import { Vehicle } from '../../../core/models/vehicles';

@Component({
  selector: 'app-vehicles-table',
  standalone: true,
  imports: [
    AsyncPipe,
    PoPageModule,
    PoButtonModule,
    PoTableModule,
    PoModalModule
  ],
  templateUrl: './vehicles-table.component.html',
  styleUrl: './vehicles-table.component.scss'
})
export class VehiclesTableComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  
  private vehiclesFacade = inject(VehiclesFacade);
  readonly tableColumns = [
    { property: 'id', label: 'Id'},
    { property: 'brand', label: 'Marca'},
    { property: 'model', label: 'Modelo'},
    { property: 'type', label: 'Tipo'},
    { property: 'year', label: 'Ano'},
    { property: 'cargo_capacity_kg', label: 'Capacidade da carga (kg)'},
    { property: 'average_consumption_km_per_liter', label: 'Consumo médio por litro (Km)'},
    { property: 'fuel_type', label: 'Combustível'}
  ];
  readonly spacing = PoTableColumnSpacing.Medium;
  readonly tableActions: PoTableAction[] = [
    {
      label: 'Editar',
      action: this.onClickEditVehicle.bind(this),
      icon: 'po-icon-edit',
      visible: true
    },
    {
      label: 'Excluir',
      action: this.onClickRemoveVehicle.bind(this),
      icon: 'po-icon-delete',
      visible: true
    }
  ];
  vehicles$ = this.vehiclesFacade.vehicles$;

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirmar'
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClickEditVehicle(vehicles: Vehicle) {
    this.router.navigate([`editar/${vehicles.id}`], { relativeTo: this.route });
  }

  onClickRemoveVehicle(vehicles: Vehicle) {
    this.poModal.open();
  }

  onClickNewVehicle() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  closeModal() {
    this.poModal.close();
  }
}
