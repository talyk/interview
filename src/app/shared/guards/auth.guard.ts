import { Injectable } from '@angular/core';
import {UrlTree,Router,CanLoad,Route,UrlSegment,} from '@angular/router';
import { AuthService } from '@shared/services/api';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private auth: AuthService, private router: Router) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log(this.auth);
        
        if (!this.auth.isAuthorized) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }

}
