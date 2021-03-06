import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import DynamicComponent from './dynamic.componet';

const dynamicRoutes: Routes = [
  { path: '', component: DynamicComponent, pathMatch: 'full' }
];

export const routes: ModuleWithProviders = RouterModule.forChild(dynamicRoutes);