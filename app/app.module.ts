import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NSModuleFactoryLoader } from 'nativescript-angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

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
        SharedModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent,

        LeagueTableComponent,
        TablesComponent,

// <-- To remove when lazy loading
        CompetitionFixturesComponent,
        FixtureComponent,

        TeamComponent,
        PlayerComponent,
        AgePipe,
        FlagPipe
// -->
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
