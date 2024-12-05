import { IConfig as UnleashConfig, UnleashClient } from 'unleash-proxy-client';
import { Observable } from 'rxjs';
import { ImpressionEvent } from './events/impression';
import * as i0 from "@angular/core";
export declare class UnleashService {
    private readonly config;
    readonly unleash: UnleashClient;
    readonly initialized$: Observable<void>;
    readonly error$: Observable<unknown>;
    readonly ready$: Observable<void>;
    readonly update$: Observable<void>;
    readonly impression$: Observable<ImpressionEvent>;
    constructor(config: UnleashConfig);
    isEnabled(featureFlag: string): boolean;
    isDisabled(featureFlag: string): boolean;
    isEnabled$(featureFlag: string): Observable<boolean>;
    isDisabled$(featureFlag: string): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnleashService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnleashService>;
}
