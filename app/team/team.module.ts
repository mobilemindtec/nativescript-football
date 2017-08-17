import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { TeamRoutes } from './team.routes';
import { TeamComponent, PlayerComponent } from './'

import { AgePipe } from '../age.pipe';
import { FlagPipe } from '../flag.pipe';

import { FootballService } from '../football.service';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>TeamRoutes)
  ],
  declarations: [
    TeamComponent,
    PlayerComponent,
    AgePipe,
    FlagPipe
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TeamModule { }
