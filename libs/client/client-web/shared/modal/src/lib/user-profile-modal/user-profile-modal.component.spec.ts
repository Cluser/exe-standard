import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileModalComponent } from './user-profile-modal.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

describe('UserProfileModalComponent', () => {
  let component: UserProfileModalComponent;
  let fixture: ComponentFixture<UserProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileModalComponent ],
      providers: [
        {
          provide: DynamicDialogRef, useValue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the user object on initialization', () => {
    expect(component.user).toEqual({
      name: '',
      surname: ''
    });
  });

  it('should have a saveProfile method', () => {
    expect(component.saveProfile).toBeDefined();
  });

  it('should have a close method', () => {
    expect(component.close).toBeDefined();
  });
});