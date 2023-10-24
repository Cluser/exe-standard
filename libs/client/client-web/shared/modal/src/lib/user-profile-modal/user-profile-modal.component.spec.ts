import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileModalComponent } from './user-profile-modal.component';

describe('UserProfileModalComponent', () => {
  let component: UserProfileModalComponent;
  let fixture: ComponentFixture<UserProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileModalComponent ]
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
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatar: 'https://via.placeholder.com/150'
    });
  });

  it('should have a saveProfile method', () => {
    expect(component.saveProfile).toBeDefined();
  });

  it('should have a close method', () => {
    expect(component.close).toBeDefined();
  });

  it('should close the modal with true value when saveProfile is called', () => {
    spyOn(component.ref, 'close');
    component.saveProfile();
    expect(component.ref.close).toHaveBeenCalledWith(true);
  });

  it('should close the modal with false value when close is called', () => {
    spyOn(component.ref, 'close');
    component.close();
    expect(component.ref.close).toHaveBeenCalledWith(false);
  });
});