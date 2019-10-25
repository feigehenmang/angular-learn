import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class PreloadAllModules implements PreloadingStrategy {
    preload(route: Route, loadFn) {
        console.log('当前便利route', route);
        const isPreload = route.data.preload;
        return isPreload ? loadFn() : of(null);
    }
}
