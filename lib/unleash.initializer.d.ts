import { EnvironmentProviders, InjectionToken } from '@angular/core';
import { IConfig as UnleashConfig } from 'unleash-proxy-client';
export declare const UNLEASH_CONFIG: InjectionToken<UnleashConfig>;
export declare function provideUnleashProxy(config: UnleashConfig): EnvironmentProviders;
