import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let mockStore: MockStore;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        VehicleComponent,
      ],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    mockStore = TestBed.inject(MockStore); // Inject mock Store
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
