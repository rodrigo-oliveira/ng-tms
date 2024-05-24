import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { Store } from '@ngrx/store';
import { notificationStatusSelector } from './state/notification-status.selectors';
import { Subscription } from 'rxjs';

const SUCCESS_MESSAGE = 'Operação realizada com sucesso.';
const ERROR_MESSAGE = 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.';

@Component({
  selector: 'app-notification-status',
  standalone: true,
  template: ``
})
export class NotificationStatusComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private poNotification = inject(PoNotificationService);
  private notificationStatusSubscription: Subscription;
  private notificationStatus$ = this.store.select(notificationStatusSelector);
  private status = {
    default: () => null,
    success: () => this.poNotification.success(SUCCESS_MESSAGE),
    error: () => this.poNotification.error(ERROR_MESSAGE)
  };

  ngOnInit(): void {
    this.notificationStatusSubscription = this.notificationStatus$.subscribe(status => {
      return this.status[status]();
    });
  }

  ngOnDestroy(): void {
    this.notificationStatusSubscription.unsubscribe();
  }
}