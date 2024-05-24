import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationStatusComponent } from './notification-status.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../../state/app.state';

describe('NotificationStatusComponent', () => {
  let component: NotificationStatusComponent;
  let fixture: ComponentFixture<NotificationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationStatusComponent],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
});

