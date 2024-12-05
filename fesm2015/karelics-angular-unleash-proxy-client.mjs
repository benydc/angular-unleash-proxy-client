import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, APP_INITIALIZER, inject, Injectable, Inject, Directive, Input } from '@angular/core';
import { UnleashClient, EVENTS } from 'unleash-proxy-client';
import { take, tap, shareReplay, startWith, map, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { fromEvent, ReplaySubject, Subject } from 'rxjs';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

const UNLEASH_CONFIG = new InjectionToken('Unleash config');
function provideUnleashProxy(config) {
    return makeEnvironmentProviders([
        { provide: UNLEASH_CONFIG, useValue: config },
        {
            provide: APP_INITIALIZER,
            useFactory: () => {
                const unleashService = inject(UnleashService);
                return () => unleashService.initialized$.pipe(take(1), tap(() => unleashService.unleash.start()));
            },
            multi: true,
        },
    ]);
}

class UnleashService {
    constructor(config) {
        this.config = config;
        this.unleash = new UnleashClient(this.config);
        this.initialized$ = fromEvent(this.unleash, EVENTS.INIT).pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.error$ = fromEvent(this.unleash, EVENTS.ERROR).pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.ready$ = fromEvent(this.unleash, EVENTS.READY).pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.update$ = fromEvent(this.unleash, EVENTS.UPDATE).pipe(shareReplay({ bufferSize: 1, refCount: true }));
        this.impression$ = fromEvent(this.unleash, EVENTS.IMPRESSION).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    isEnabled(featureFlag) {
        return this.unleash.isEnabled(featureFlag);
    }
    isDisabled(featureFlag) {
        return !this.isEnabled(featureFlag);
    }
    isEnabled$(featureFlag) {
        return this.update$.pipe(startWith(null), map(() => this.isEnabled(featureFlag)), distinctUntilChanged());
    }
    isDisabled$(featureFlag) {
        return this.isEnabled$(featureFlag).pipe(map((state) => !state));
    }
}
UnleashService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: UnleashService, deps: [{ token: UNLEASH_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
UnleashService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: UnleashService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: UnleashService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [UNLEASH_CONFIG]
                    }] }];
    } });

class FeatureDirective extends NgIf {
    constructor() {
        super(...arguments);
        this.unleashService = inject(UnleashService);
        this.toggleNameSubject = new ReplaySubject(1);
        this.destroySubject = new Subject();
    }
    ngOnInit() {
        this.toggleNameSubject.pipe(switchMap((toggleName) => this.toggleState$(toggleName)), tap((state) => this.update(state)), takeUntil(this.destroySubject)).subscribe();
    }
    setToggleName(val) {
        this.toggleNameSubject.next(val);
    }
    update(state) {
        this.ngIf = state;
    }
    ngOnDestroy() {
        this.destroySubject.next();
        this.destroySubject.complete();
    }
}
FeatureDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FeatureDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: FeatureDirective, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureDirective, decorators: [{
            type: Directive
        }] });

class FeatureEnabledDirective extends FeatureDirective {
    constructor() {
        super(...arguments);
        this.toggleState$ = this.unleashService.isEnabled$.bind(this.unleashService);
    }
    set toggleName(val) {
        this.setToggleName(val);
    }
    set else(templateRef) {
        super.ngIfElse = templateRef;
    }
}
FeatureEnabledDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureEnabledDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FeatureEnabledDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: FeatureEnabledDirective, isStandalone: true, selector: "[featureEnabled]", inputs: { toggleName: ["featureEnabled", "toggleName"], else: ["featureEnabledElse", "else"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureEnabledDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[featureEnabled]',
                    standalone: true,
                }]
        }], propDecorators: { toggleName: [{
                type: Input,
                args: ['featureEnabled']
            }], else: [{
                type: Input,
                args: ['featureEnabledElse']
            }] } });

class FeatureDisabledDirective extends FeatureDirective {
    constructor() {
        super(...arguments);
        this.toggleState$ = this.unleashService.isDisabled$.bind(this.unleashService);
    }
    set toggleName(val) {
        this.setToggleName(val);
    }
    set else(templateRef) {
        super.ngIfElse = templateRef;
    }
}
FeatureDisabledDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureDisabledDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FeatureDisabledDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.3", type: FeatureDisabledDirective, isStandalone: true, selector: "[featureDisabled]", inputs: { toggleName: ["featureDisabled", "toggleName"], else: ["featureDisabledElse", "else"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: FeatureDisabledDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[featureDisabled]',
                    standalone: true,
                }]
        }], propDecorators: { toggleName: [{
                type: Input,
                args: ['featureDisabled']
            }], else: [{
                type: Input,
                args: ['featureDisabledElse']
            }] } });

function redirectResult(redirectUrl) {
    if (redirectUrl) {
        if (typeof redirectUrl === 'string') {
            const router = inject(Router);
            return router.navigateByUrl(redirectUrl);
        }
        else {
            return redirectUrl;
        }
    }
    return false;
}

function featureEnabled(toggleName, redirectUrl) {
    return () => {
        const unleashService = inject(UnleashService);
        return unleashService.isEnabled(toggleName) || redirectResult(redirectUrl);
    };
}

function featureDisabled(toggleName, redirectUrl) {
    return () => {
        const unleashService = inject(UnleashService);
        return !unleashService.unleash.isEnabled(toggleName) || redirectResult(redirectUrl);
    };
}

/*
 * Public API Surface of angular-unleash-proxy-client
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureDisabledDirective, FeatureEnabledDirective, UNLEASH_CONFIG, UnleashService, featureDisabled, featureEnabled, provideUnleashProxy };
//# sourceMappingURL=karelics-angular-unleash-proxy-client.mjs.map
