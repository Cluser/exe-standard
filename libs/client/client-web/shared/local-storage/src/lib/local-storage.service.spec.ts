import { TestBed } from '@angular/core/testing';
import { LocalStorageService, LocalStorage } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an item in localStorage', () => {
    const key = 'testKey';
    const value: LocalStorage = { PARAMETER_01: 'testValue' };

    service.setItem(key, value);

    const storedValue = JSON.parse(localStorage.getItem(key) as string);
    expect(storedValue).toEqual(value);
  });

  it('should get an item from localStorage', () => {
    const key = 'testKey';
    const value: LocalStorage = { PARAMETER_01: 'testValue' };
    localStorage.setItem(key, JSON.stringify(value));

    const retrievedValue = service.getItem(key);

    expect(retrievedValue).toEqual(value);
  });

  it('should clear localStorage', () => {
    const key = 'testKey';
    const value: LocalStorage = { PARAMETER_01: 'testValue' };
    localStorage.setItem(key, JSON.stringify(value));

    service.clear();

    const storedValue = localStorage.getItem(key);
    expect(storedValue).toBeNull();
  });
});
