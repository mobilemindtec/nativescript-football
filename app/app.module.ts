import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NSModuleFactoryLoader } from 'nativescript-angular/router';

import { AppRoutingModule } from './app.routing';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppComponent } from './app.component';

import { TablesComponent, LeagueTableComponent } from './tables';

import { CompetitionFixturesComponent, FixtureComponent } from './competition-fixtures';
import { TeamComponent, PlayerComponent } from './team';
import { AgePipe } from './age.pipe';
import { FlagPipe } from './flag.pipe';

import { FootballService } from './football.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule // <-- To remove when lazy loading
    ],
    declarations: [
        AppComponent,
// <-- To remove when lazy loading

        LeagueTableComponent,
        TablesComponent,

        CompetitionFixturesComponent,
        FixtureComponent,

        TeamComponent,
        PlayerComponent,
        AgePipe,
        FlagPipe
// -->
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        FootballService // <-- To remove when lazy loading
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
