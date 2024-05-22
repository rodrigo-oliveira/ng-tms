import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LoadingStoreService } from '../store/loading-store.service';
import { loadingInterceptor } from './loading.interceptor';

describe('LoaderInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loadingStoreService: LoadingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingStoreService,
        provideHttpClient(withInterceptors([loadingInterceptor])),
        provideHttpClientTesting()
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loadingStoreService = TestBed.inject(LoadingStoreService);
  });

  it('should show loader when making HTTP request', () => {
    spyOn(loadingStoreService, 'show');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    expect(loadingStoreService.show).toHaveBeenCalled();

    req.flush({});
  });

  it('should hide loader after HTTP request completes', () => {
    spyOn(loadingStoreService, 'hide');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    req.flush({});

    expect(loadingStoreService.hide).toHaveBeenCalled();
  });
});