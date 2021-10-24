import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LocalStorageService } from "../shared/services/local-storage.service";
import { SharedModule } from "@shared/shared.module";
import { AuthService } from "@shared/services/api";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
    ],
    providers: [
        AuthService,
        LocalStorageService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`${parentModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}