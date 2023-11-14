import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module'

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRoutingModule],
      declarations: [ContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
