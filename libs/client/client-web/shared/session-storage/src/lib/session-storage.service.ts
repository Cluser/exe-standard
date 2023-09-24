import { Injectable } from '@angular/core';

export interface SessionStorage {
    PARAMETER_01: string
}

export const SESSION_STORAGE: SessionStorage = {
    PARAMETER_01: 'PARAMETER_01'
}

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

    setItem(name: string, value: string | object): void {
        return sessionStorage.setItem(name, JSON.stringify(value));
    }

    getItem(name: string): object {
        return JSON.parse(sessionStorage.getItem(name) as string);
    }

    clear(): void {
        return sessionStorage.clear();
    }
}