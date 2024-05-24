import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { loadingInterceptor } from './loading.interceptor';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadingActions } from './state/loading.actions';

describe('LoaderInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([loadingInterceptor])),
        provideHttpClientTesting(),
        provideMockStore()
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockStore = TestBed.inject(MockStore);
  });

  it('should show loader when making HTTP request', () => {
    spyOn(mockStore, 'dispatch');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    expect(mockStore.dispatch).toHaveBeenCalledWith(loadingActions.loadingStarted());

    req.flush({});
  });

  it('should hide loader after HTTP request completes', () => {
    spyOn(mockStore, 'dispatch');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    req.flush({});

    expect(mockStore.dispatch).toHaveBeenCalledWith(loadingActions.loadingSuccess());
  });
});