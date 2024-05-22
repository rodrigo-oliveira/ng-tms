import { Component, Signal } from '@angular/core';
import { LoaderStoreService } from '../../../core/store/loader-store.service';
import { PoLoadingModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ CommonModule, PoLoadingModule ],
  styles: ':host:hidden {visibility: hidden;}',
  template: '<po-loading-overlay [p-screen-lock]="true" [hidden]="!isLoading()"></po-loading-overlay>'
})
export class LoaderComponent {
  isLoading: Signal<boolean> = this.loaderStoreService.isLoading;

  constructor(private loaderStoreService: LoaderStoreService) { }
}