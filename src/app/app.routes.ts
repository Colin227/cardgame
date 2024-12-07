import { Routes } from '@angular/router';
import { GameroomComponent } from './components/gameroom/gameroom.component';

export const routes: Routes = [
    {
        path: 'game/:id',
        pathMatch: 'full',
        component: GameroomComponent
    }
];
