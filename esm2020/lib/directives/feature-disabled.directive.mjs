import { Directive, Input } from '@angular/core';
import { FeatureDirective } from './feature.directive';
import * as i0 from "@angular/core";
export class FeatureDisabledDirective extends FeatureDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kaXNhYmxlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXVubGVhc2gtcHJveHktY2xpZW50L3NyYy9saWIvZGlyZWN0aXZlcy9mZWF0dXJlLWRpc2FibGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFPdkQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjtJQUo5RDs7UUFjWSxpQkFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDcEY7SUFWQyxJQUE4QixVQUFVLENBQUMsR0FBVztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUNJLElBQUksQ0FBQyxXQUFxRDtRQUM1RCxLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUMvQixDQUFDOztxSEFSVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFK0IsVUFBVTtzQkFBdkMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBS3BCLElBQUk7c0JBRFAsS0FBSzt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZURpcmVjdGl2ZSB9IGZyb20gJy4vZmVhdHVyZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdJZkNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZmVhdHVyZURpc2FibGVkXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIEZlYXR1cmVEaXJlY3RpdmUge1xuICBASW5wdXQoJ2ZlYXR1cmVEaXNhYmxlZCcpIHNldCB0b2dnbGVOYW1lKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRUb2dnbGVOYW1lKHZhbCk7XG4gIH1cblxuICBASW5wdXQoJ2ZlYXR1cmVEaXNhYmxlZEVsc2UnKVxuICBzZXQgZWxzZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8Ym9vbGVhbj4+IHwgbnVsbCkge1xuICAgIHN1cGVyLm5nSWZFbHNlID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9nZ2xlU3RhdGUkID0gdGhpcy51bmxlYXNoU2VydmljZS5pc0Rpc2FibGVkJC5iaW5kKHRoaXMudW5sZWFzaFNlcnZpY2UpO1xufVxuIl19