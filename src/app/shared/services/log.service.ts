import { Injectable } from '@angular/core';

export enum LogLevel {
    ALL = 'ALL',
    Debug = 'DEBUG',
    Info = 'INFO',
    Warn = 'WARN',
    Error = 'ERROR',
    Fatal = 'FATAL',
    Off = 'OFF',
}

@Injectable({
    providedIn: 'root',
})
export class LogService {
    constructor() { }

    debug(message: string, component: string, ...data: any): void {
        this.writeLog(LogLevel.Debug, component, message, data);
    }
    warn(message: string, component: string, ...data: any): void {
        this.writeLog(LogLevel.Warn, component, message, data);
    }
    error(message: string, component: string, ...data: any): void {
        this.writeLog(LogLevel.Error, component, message, data);
    }
    fatal(message: string, component: string, ...data: any): void {
        this.writeLog(LogLevel.Fatal, component, message, data);
    }

    private writeLog(logLevel: LogLevel,component: string,message: string,data: any): void {
        console.log(`[${logLevel}] ${this.getDate()} [${component} Component] - ${message}, output: ${data ? JSON.stringify(data) : ''}`);
    }

    getDate(): string {
        const today = new Date();
        return `${today.toDateString()} ${today.toLocaleTimeString()}`;
    }
}
