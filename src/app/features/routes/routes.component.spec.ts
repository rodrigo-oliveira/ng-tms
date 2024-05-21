import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutesComponent } from './routes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('RoutesComponent', () => {
  let component: RoutesComponent;
  let fixture: ComponentFixture<RoutesComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RoutesComponent
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
