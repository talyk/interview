import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private readonly stateKey: string = 'state';
    private state: { [key: string]: any };

    constructor() { }
    
    getState(): any {
        const storageState = localStorage.getItem(this.stateKey);
        this.state = storageState ? JSON.parse(atob(storageState)) : {};
        return this.state;
    }

    setState(key: string, value: any): void {
        this.state = { ...this.state, [key]: value };
        localStorage.setItem(this.stateKey, btoa(JSON.stringify(this.state)));
    }
}
