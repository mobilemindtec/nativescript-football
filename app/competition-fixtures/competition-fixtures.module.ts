import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule, NativeScriptHttpModule } from 'nativescript-angular';

import { CompetitionFixturesRoutes } from './competition-fixtures.routes';

import { CompetitionFixturesComponent, FixtureComponent } from './';
import { FootballService } from '../football.service';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule.forChild(<any>CompetitionFixturesRoutes)
  ],
  declarations: [
    // CompetitionFixturesComponent,
    // FixtureComponent
  ],
  providers: [
    FootballService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CompetitionFixturesModule { }
