import { Routes } from '@angular/router';

import { TablesComponent } from './tables';
import { CompetitionFixturesComponent } from './competition-fixtures';
import { TeamComponent } from './team';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/tables', pathMatch: 'full' },
    { path: 'tables', component: TablesComponent },
    
// <-- To remove when lazy loading
    { path: 'fixtures/:competitionId/:competitionName', component: CompetitionFixturesComponent },
    { path: 'team/:teamId', component: TeamComponent }
// --> 

// <-- To use when lazy loading
    // { path: 'fixtures/:competitionId/:competitionName', loadChildren: './competition-fixtures/competition-fixtures.module#CompetitionFixturesModule' },
    // { path: 'team/:teamId', loadChildren: './team/team.module#TeamModule' }
// -->
];
