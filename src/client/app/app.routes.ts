import { Routes } from '@angular/router';

import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';

export const routes: Routes = [
	...SignupRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
