import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '@shared/services/log.service';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/api/auth.service';
import { passwordValidator } from '@shared/custom-validators/password-validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error: boolean = false;

    constructor(
        private authService: AuthService,
        private logger: LogService,
        private fb: FormBuilder,
        private router: Router, 
    ) { }

    ngOnInit(): void {
        this.loginForm = this.initForm();
    }
    get username(): AbstractControl {
        return this.loginForm.get('username');
    }
    get password(): AbstractControl {
        return this.loginForm.get('password');
    }

    initForm(): FormGroup {
        return this.fb.group({
            username: ['Bob', Validators.required],
            password: ['Bob1234!', [Validators.required, passwordValidator]],
        });
    }

    onLogin(): void {
        this.logger.debug('login click', 'Login');
        this.loginForm.markAllAsTouched();

        this.authService.login(this.loginForm.value)
            .subscribe((result) => {
                this.logger.debug('response', 'Login', result);
                if (!result) {
                    this.error = true;
                    return;
                }

                this.router.navigate(['/heroes']);
            });
    }
}
