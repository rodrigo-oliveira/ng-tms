import { Component, inject } from '@angular/core';
import { PoLoadingModule } from '@po-ui/ng-components';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadingSelector } from './state/loading.selectors';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ AsyncPipe, PoLoadingModule ],
  styles: ':host:hidden {visibility: hidden;}',
  template: `<po-loading-overlay [p-screen-lock]="true" [hidden]="(loadingStatus$ | async) !== 'loading'"></po-loading-overlay>`
})
export class LoadingComponent {
  private store = inject(Store);
  loadingStatus$ = this.store.select(loadingSelector);
}