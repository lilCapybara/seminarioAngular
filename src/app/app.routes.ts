import { Routes } from '@angular/router';
import { MaquetasCompraComponent } from './maquetas-compra/maquetas-compra.component';
import { MaquetasAboutComponent } from './maquetas-about/maquetas-about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'compra',
        pathMatch: 'full'
    },

    {
        path: 'compra',
        component: MaquetasCompraComponent
    },

    {
        path: 'about',
        component: MaquetasAboutComponent
    }
];
