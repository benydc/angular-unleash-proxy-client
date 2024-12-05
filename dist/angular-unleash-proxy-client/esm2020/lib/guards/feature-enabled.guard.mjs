import { inject } from '@angular/core';
import { UnleashService } from '../unleash.service';
import { redirectResult } from './utils';
export function featureEnabled(toggleName, redirectUrl) {
    return () => {
        const unleashService = inject(UnleashService);
        return unleashService.isEnabled(toggleName) || redirectResult(redirectUrl);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1lbmFibGVkLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci11bmxlYXNoLXByb3h5LWNsaWVudC9zcmMvbGliL2d1YXJkcy9mZWF0dXJlLWVuYWJsZWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV6QyxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBQWtCLEVBQUUsV0FBOEI7SUFDL0UsT0FBTyxHQUFHLEVBQUU7UUFDVixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGVGbiwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVubGVhc2hTZXJ2aWNlIH0gZnJvbSAnLi4vdW5sZWFzaC5zZXJ2aWNlJztcbmltcG9ydCB7IHJlZGlyZWN0UmVzdWx0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlRW5hYmxlZCh0b2dnbGVOYW1lOiBzdHJpbmcsIHJlZGlyZWN0VXJsPzogc3RyaW5nIHwgVXJsVHJlZSk6IENhbkFjdGl2YXRlRm4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IHVubGVhc2hTZXJ2aWNlID0gaW5qZWN0KFVubGVhc2hTZXJ2aWNlKTtcbiAgICByZXR1cm4gdW5sZWFzaFNlcnZpY2UuaXNFbmFibGVkKHRvZ2dsZU5hbWUpIHx8IHJlZGlyZWN0UmVzdWx0KHJlZGlyZWN0VXJsKTtcbiAgfTtcbn1cbiJdfQ==