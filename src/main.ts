import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { DashboardAppModule } from './DashboardApp/app.module';

if (environment.production) {
  enableProdMode();
} 

platformBrowserDynamic().bootstrapModule(DashboardAppModule)
  .catch(err => console.error(err));
