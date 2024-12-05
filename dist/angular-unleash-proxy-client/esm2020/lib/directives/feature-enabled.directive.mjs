import { Directive, Input } from '@angular/core';
import { FeatureDirective } from './feature.directive';
import * as i0 from "@angular/core";
export class FeatureEnabledDirective extends FeatureDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1lbmFibGVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItdW5sZWFzaC1wcm94eS1jbGllbnQvc3JjL2xpYi9kaXJlY3RpdmVzL2ZlYXR1cmUtZW5hYmxlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBT3ZELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7SUFKN0Q7O1FBY1ksaUJBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ25GO0lBVkMsSUFBNkIsVUFBVSxDQUFDLEdBQVc7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsV0FBcUQ7UUFDNUQsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQzs7b0hBUlUsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBRThCLFVBQVU7c0JBQXRDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUtuQixJQUFJO3NCQURQLEtBQUs7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVEaXJlY3RpdmUgfSBmcm9tICcuL2ZlYXR1cmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nSWZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZlYXR1cmVFbmFibGVkXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVFbmFibGVkRGlyZWN0aXZlIGV4dGVuZHMgRmVhdHVyZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnZmVhdHVyZUVuYWJsZWQnKSBzZXQgdG9nZ2xlTmFtZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VG9nZ2xlTmFtZSh2YWwpO1xuICB9XG5cbiAgQElucHV0KCdmZWF0dXJlRW5hYmxlZEVsc2UnKVxuICBzZXQgZWxzZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8Ym9vbGVhbj4+IHwgbnVsbCkge1xuICAgIHN1cGVyLm5nSWZFbHNlID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9nZ2xlU3RhdGUkID0gdGhpcy51bmxlYXNoU2VydmljZS5pc0VuYWJsZWQkLmJpbmQodGhpcy51bmxlYXNoU2VydmljZSk7XG59XG4iXX0=