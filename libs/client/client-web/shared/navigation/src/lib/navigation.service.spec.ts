import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute } from '@angular/router';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  // let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NavigationService],
    });
    service = TestBed.inject(NavigationService);
    // activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should navigate to the dashboard', fakeAsync(() => {
  //   const navigateSpy = spyOn(activatedRoute, 'url');
  //   service.navigateToDashboard();
  //   tick();
  //   expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);
  // }));

  // it('should navigate to the configuration', fakeAsync(() => {
  //   const navigateSpy = spyOn(activatedRoute, 'url');
  //   service.navigateToConfiguration();
  //   tick();
  //   expect(navigateSpy).toHaveBeenCalledWith(['dashboard', 'configuration']);
  // }));

  // it('should get current URL', () => {
  //   spyOn(activatedRoute.snapshot, 'toString').and.returnValue('/sample-url');
  //   const currentUrl = service.getCurrentUrl();
  //   expect(currentUrl).toBe('/sample-url');
  // });

  // it('should get current URL as an observable', (done) => {
  //   spyOn(activatedRoute.snapshot, 'toString').and.returnValue('/sample-url');
  //   service.getCurrentUrl$().subscribe((url) => {
  //     expect(url).toBe('/sample-url');
  //     done();
  //   });
  // });

  // it('should get breadcrumbs', () => {
  //   spyOn(activatedRoute.snapshot, 'toString').and.returnValue('/path/to/some/page');
  //   const breadcrumbs = service.getBreadcrumbs();
  //   expect(breadcrumbs).toEqual(['path', 'to', 'some', 'page']);
  // });

  // it('should get breadcrumbs as an observable', (done) => {
  //   spyOn(activatedRoute.snapshot, 'toString').and.returnValue('/path/to/some/page');
  //   service.getBreadcrumbs$().subscribe((breadcrumbs) => {
  //     expect(breadcrumbs).toEqual(['path', 'to', 'some', 'page']);
  //     done();
  //   });
  // });
});
