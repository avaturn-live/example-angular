import { Routes } from '@angular/router';
import { ContinueComponent } from './continue/continue.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'continue', component: ContinueComponent },
];
