import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NotificationErrorStore } from './notification-error.store';
import { AsyncPipe } from '@angular/common';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-notification-error',
  standalone: true,
  imports: [ AsyncPipe],
  template: ``
})
export class NotificationErrorComponent implements OnInit, OnDestroy {
  poNotification = inject(PoNotificationService);
  notificationErrorStore = inject(NotificationErrorStore)
  showError$ = this.notificationErrorStore.showError$;

  ngOnInit(): void {
    this.showError$.subscribe(showError => {
      if (showError) {
        this.poNotification.error('Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
      }
    });
  }

  ngOnDestroy(): void {
    this.showError$.unsubscribe();
  }
}