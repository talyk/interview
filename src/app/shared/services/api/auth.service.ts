import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '@shared/services';
import { Trainer } from '@shared/models';

const trainers: Trainer[] = [
    {
        username: 'Bob',
        password: 'Bob1234!',
    },
    {
        username: 'Alice',
        password: 'Alice4321!',
    },
];

@Injectable()
export class AuthService {
    isAuthorized: boolean = false;
    private readonly userKey = 'user';
    userName: string;

    constructor(private storageService: LocalStorageService) {
        const state = this.storageService.getState();
        if (state[this.userKey]) this.login(state.user);
    }

    login(loginDetails: Trainer): Observable<boolean> {
        
        this.isAuthorized = false;
        const trainer = trainers.find((t: Trainer) => t.username === loginDetails.username && t.password === loginDetails.password);
        
        if (trainer) {
            this.isAuthorized = true;
            this.userName = trainer.username;
            this.storageService.setState(this.userKey, loginDetails);
        }
        return of(this.isAuthorized);
    }
}
