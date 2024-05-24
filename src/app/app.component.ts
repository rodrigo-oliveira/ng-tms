import { Component, OnDestroy } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import {
  PoLoadingModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgIf } from '@angular/common';
import { NotificationErrorComponent } from './shared/components/notification-error/notification-error.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    PoToolbarModule,
    PoLoadingModule,
    MenuComponent,
    LoadingComponent,
    NotificationErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  isLoading = false;
  routerEventsSubscription: Subscription;   

  constructor(private router: Router) {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading  = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }
}
