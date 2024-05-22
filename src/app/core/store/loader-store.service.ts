import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderStoreService {
  private isLoadingSignal: WritableSignal<boolean> = signal(false);
  readonly isLoading = this.isLoadingSignal.asReadonly();

  constructor() { }

  show() {
    this.isLoadingSignal.set(true);
  }

  hide() {
    this.isLoadingSignal.set(false);
  }
}
