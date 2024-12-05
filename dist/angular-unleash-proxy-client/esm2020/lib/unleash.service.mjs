import { Inject, Injectable } from '@angular/core';
import { EVENTS, UnleashClient } from 'unleash-proxy-client';
import { UNLEASH_CONFIG } from './unleash.initializer';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class UnleashService {
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
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [UNLEASH_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZWFzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci11bmxlYXNoLXByb3h5LWNsaWVudC9zcmMvbGliL3VubGVhc2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUE0QixhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNbkYsTUFBTSxPQUFPLGNBQWM7SUFTekIsWUFDMkMsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVR2RCxZQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLGlCQUFZLEdBQUcsU0FBUyxDQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0csV0FBTSxHQUFHLFNBQVMsQ0FBVSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdHLFdBQU0sR0FBRyxTQUFTLENBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRyxZQUFPLEdBQUcsU0FBUyxDQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUcsZ0JBQVcsR0FBRyxTQUFTLENBQWtCLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFJcEksQ0FBQztJQUVMLFNBQVMsQ0FBQyxXQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxVQUFVLENBQUMsV0FBbUI7UUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDdEMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdEMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7MkdBakNVLGNBQWMsa0JBVWYsY0FBYzsrR0FWYixjQUFjLGNBRmIsTUFBTTsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBV0ksTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFVkVOVFMsIElDb25maWcgYXMgVW5sZWFzaENvbmZpZywgVW5sZWFzaENsaWVudCB9IGZyb20gJ3VubGVhc2gtcHJveHktY2xpZW50JztcbmltcG9ydCB7IFVOTEVBU0hfQ09ORklHIH0gZnJvbSAnLi91bmxlYXNoLmluaXRpYWxpemVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEltcHJlc3Npb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL2ltcHJlc3Npb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5sZWFzaFNlcnZpY2Uge1xuICByZWFkb25seSB1bmxlYXNoID0gbmV3IFVubGVhc2hDbGllbnQodGhpcy5jb25maWcpO1xuXG4gIHJlYWRvbmx5IGluaXRpYWxpemVkJCA9IGZyb21FdmVudDx2b2lkPih0aGlzLnVubGVhc2gsIEVWRU5UUy5JTklUKS5waXBlKHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSkpO1xuICByZWFkb25seSBlcnJvciQgPSBmcm9tRXZlbnQ8dW5rbm93bj4odGhpcy51bmxlYXNoLCBFVkVOVFMuRVJST1IpLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIHJlYWRvbmx5IHJlYWR5JCA9IGZyb21FdmVudDx2b2lkPih0aGlzLnVubGVhc2gsIEVWRU5UUy5SRUFEWSkucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcbiAgcmVhZG9ubHkgdXBkYXRlJCA9IGZyb21FdmVudDx2b2lkPih0aGlzLnVubGVhc2gsIEVWRU5UUy5VUERBVEUpLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIHJlYWRvbmx5IGltcHJlc3Npb24kID0gZnJvbUV2ZW50PEltcHJlc3Npb25FdmVudD4odGhpcy51bmxlYXNoLCBFVkVOVFMuSU1QUkVTU0lPTikucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVOTEVBU0hfQ09ORklHKSBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogVW5sZWFzaENvbmZpZyxcbiAgKSB7IH1cblxuICBpc0VuYWJsZWQoZmVhdHVyZUZsYWc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVubGVhc2guaXNFbmFibGVkKGZlYXR1cmVGbGFnKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoZmVhdHVyZUZsYWc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0VuYWJsZWQoZmVhdHVyZUZsYWcpO1xuICB9XG5cbiAgaXNFbmFibGVkJChmZWF0dXJlRmxhZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlJC5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKCgpID0+IHRoaXMuaXNFbmFibGVkKGZlYXR1cmVGbGFnKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gIH1cblxuICBpc0Rpc2FibGVkJChmZWF0dXJlRmxhZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbmFibGVkJChmZWF0dXJlRmxhZykucGlwZShcbiAgICAgIG1hcCgoc3RhdGUpID0+ICFzdGF0ZSksXG4gICAgKTtcbiAgfVxufVxuIl19