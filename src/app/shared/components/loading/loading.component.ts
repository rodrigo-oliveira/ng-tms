import { Component, Signal } from '@angular/core';
import { LoadingStoreService } from '../../../core/store/loading-store.service';
import { PoLoadingModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ CommonModule, PoLoadingModule ],
  styles: ':host:hidden {visibility: hidden;}',
  template: '<po-loading-overlay [p-screen-lock]="true" [hidden]="!isLoading()"></po-loading-overlay>'
})
export class LoadingComponent {
  isLoading: Signal<boolean> = this.loadingStoreService.isLoading;

  constructor(private loadingStoreService: LoadingStoreService) { }
}