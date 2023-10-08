import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'exe-test-host-component',
  template: `
    <exe-loader [isLoading]="isLoading"></exe-loader>
  `,
})
class TestHostComponent {
  isLoading: boolean | null = true;
}

describe('LoaderComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSpinnerModule],
      declarations: [LoaderComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoaderComponent', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should include LoaderComponent in the DOM when isLoading is true', () => {
    testHostComponent.isLoading = true;
    fixture.detectChanges();
    const loaderComponentElement = fixture.nativeElement.querySelector(
        'p-progressSpinner'
    );
    expect(loaderComponentElement).toBeTruthy();
  });

  it('should not include LoaderComponent in the DOM when isLoading is false', () => {
    testHostComponent.isLoading = false;
    fixture.detectChanges();
    const loaderComponentElement = fixture.nativeElement.querySelector(
        'p-progressSpinner'
    );
    expect(loaderComponentElement).toBeFalsy();
  });

  it('should not include LoaderComponent in the DOM when isLoading is null', () => {
    testHostComponent.isLoading = null;
    fixture.detectChanges();
    const loaderComponentElement = fixture.nativeElement.querySelector(
        'p-progressSpinner'
    );
    expect(loaderComponentElement).toBeFalsy();
  });
});
