import { OnDestroy, OnInit } from '@angular/core';
import { UnleashService } from '../unleash.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class FeatureDirective extends NgIf<boolean> implements OnInit, OnDestroy {
    protected readonly unleashService: UnleashService;
    private readonly toggleNameSubject;
    private readonly destroySubject;
    protected abstract toggleState$: (toggleName: string) => Observable<boolean>;
    ngOnInit(): void;
    protected setToggleName(val: string): void;
    protected update(state: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeatureDirective, never, never, {}, {}, never, never, false, never>;
}
