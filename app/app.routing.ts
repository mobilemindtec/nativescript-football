import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { CompetitionFixturesComponent } from './competition-fixtures/competition-fixtures.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: '', redirectTo: '/football', pathMatch: 'full' },
  { path: 'football', children: [
    { path: '', component: TablesComponent },
    { path: 'fixtures/:competitionId/:competitionName', component: CompetitionFixturesComponent },
  { path: 'team/:teamId', component: TeamComponent }
  ]},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }