import { TestBed } from '@angular/core/testing';
import { SessionStorageService, SessionStorage } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an item in sessionStorage', () => {
    const key = 'testKey';
    const value: SessionStorage = { PARAMETER_01: 'testValue' };

    service.setItem(key, value);

    const storedValue = JSON.parse(sessionStorage.getItem(key) as string);
    expect(storedValue).toEqual(value);
  });

  it('should get an item from sessionStorage', () => {
    const key = 'testKey';
    const value: SessionStorage = { PARAMETER_01: 'testValue' };
    sessionStorage.setItem(key, JSON.stringify(value));

    const retrievedValue = service.getItem(key);

    expect(retrievedValue).toEqual(value);
  });

  it('should clear sessionStorage', () => {
    const key = 'testKey';
    const value: SessionStorage = { PARAMETER_01: 'testValue' };
    sessionStorage.setItem(key, JSON.stringify(value));

    service.clear();

    const storedValue = sessionStorage.getItem(key);
    expect(storedValue).toBeNull();
  });
});
