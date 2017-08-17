import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NativeScriptRouterModule} from 'nativescript-angular';

import { CompetitionFixturesRoutes } from './competition-fixtures.routes';

import { CompetitionFixturesComponent, FixtureComponent } from './';
import { FootballService } from '../football.service';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>CompetitionFixturesRoutes)
  ],
  declarations: [
    CompetitionFixturesComponent,
    FixtureComponent
  ],
  providers: [
    FootballService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CompetitionFixturesModule { }
