import { Routes } from '@angular/router';

import { HomeServices } from './pages/home-services/home-services';

import { HomeServiceDetails } from './pages/home-service-details/home-service-details';


export const HOME_SERVICES_ROUTES: Routes = [

  {
    path: '',
    component: HomeServices
  },

  {
    path: ':serviceId',
    component: HomeServiceDetails
  }

];