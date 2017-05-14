import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppComponent } from './app.component';

import { CompetitionFixturesComponent } from './competition-fixtures/competition-fixtures.component';
import { FixtureComponent } from './fixture/fixture.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { TablesComponent } from './tables/tables.component';
import { TeamComponent } from './team/team.component';

import { FootballService } from './football.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        CompetitionFixturesComponent,
        FixtureComponent,
        LeagueTableComponent,
        TablesComponent,
        TeamComponent
    ],
    providers: [
        FootballService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
