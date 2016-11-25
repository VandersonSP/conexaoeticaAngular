import { Routes } from '@angular/router';

import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';
import {HomeCERoutes} from "./conexaoeticacarrefour/home-c-e.routes";

export const routes: Routes = [
  ...HomeCERoutes,
	...SignupRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
