import { Injectable } from '@angular/core';

export interface LocalStorage {
    PARAMETER_01: string
}

export const LOCAL_STORAGE: LocalStorage = {
    PARAMETER_01: 'PARAMETER_01'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    setItem(name: string, value: string | object): void {
        return localStorage.setItem(name, JSON.stringify(value));
    }

    getItem(name: string): object {
        return JSON.parse(localStorage.getItem(name) as string);
    }

    clear(): void {
        return localStorage.clear();
    }
}