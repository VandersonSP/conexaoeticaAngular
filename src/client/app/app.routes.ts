import { Routes } from '@angular/router';

import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';
import {HomeComponent} from "./dashboard/home/home.component";

export const routes: Routes = [
	...SignupRoutes,
	...DashboardRoutes,
	{ path: '**', component: HomeComponent }
];
