import { Component, inject } from '@angular/core';
import { NotificationErrorStore } from './notification-error.store';
import { AsyncPipe } from '@angular/common';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-notification-error',
  standalone: true,
  imports: [ AsyncPipe],
  template: `<p>{{showError$ | async}}</p>`
})
export class NotificationErrorComponent {
  poNotification = inject(PoNotificationService);
  notificationErrorStore = inject(NotificationErrorStore)
  showError$ = this.notificationErrorStore.showError$;

  ngOnInit(): void {
    this.showError$.subscribe(showError => {
      if (showError) {
        this.poNotification.error('Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
      }
    })
  }
}