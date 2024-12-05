import { Directive, inject } from '@angular/core';
import { UnleashService } from '../unleash.service';
import { NgIf } from '@angular/common';
import { ReplaySubject, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FeatureDirective extends NgIf {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXVubGVhc2gtcHJveHktY2xpZW50L3NyYy9saWIvZGlyZWN0aXZlcy9mZWF0dXJlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHM0QsTUFBTSxPQUFnQixnQkFBaUIsU0FBUSxJQUFhO0lBRDVEOztRQUVxQixtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUxQyxzQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUNqRCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7S0F3QnZEO0lBcEJDLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDeEQsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQy9CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVTLGFBQWEsQ0FBQyxHQUFXO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OzZHQTNCbUIsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFEckMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5qZWN0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5sZWFzaFNlcnZpY2UgfSBmcm9tICcuLi91bmxlYXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGZWF0dXJlRGlyZWN0aXZlIGV4dGVuZHMgTmdJZjxib29sZWFuPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHVubGVhc2hTZXJ2aWNlID0gaW5qZWN0KFVubGVhc2hTZXJ2aWNlKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZU5hbWVTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8c3RyaW5nPigxKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95U3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRvZ2dsZVN0YXRlJDogKHRvZ2dsZU5hbWU6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZU5hbWVTdWJqZWN0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHRvZ2dsZU5hbWUpID0+IHRoaXMudG9nZ2xlU3RhdGUkKHRvZ2dsZU5hbWUpKSxcbiAgICAgIHRhcCgoc3RhdGUpID0+IHRoaXMudXBkYXRlKHN0YXRlKSksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95U3ViamVjdCksXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRUb2dnbGVOYW1lKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVOYW1lU3ViamVjdC5uZXh0KHZhbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uZ0lmID0gc3RhdGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lTdWJqZWN0Lm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3lTdWJqZWN0LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==