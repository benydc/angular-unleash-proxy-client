import { TemplateRef } from '@angular/core';
import { FeatureDirective } from './feature.directive';
import { NgIfContext } from '@angular/common';
import * as i0 from "@angular/core";
export declare class FeatureEnabledDirective extends FeatureDirective {
    set toggleName(val: string);
    set else(templateRef: TemplateRef<NgIfContext<boolean>> | null);
    protected toggleState$: (featureFlag: string) => import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureEnabledDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeatureEnabledDirective, "[featureEnabled]", never, { "toggleName": "featureEnabled"; "else": "featureEnabledElse"; }, {}, never, never, true, never>;
}
