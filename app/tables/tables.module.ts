import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { TablesRoutes } from './tables.routes';
import { TablesComponent, LeagueTableComponent } from './'

import { FootballService } from '../football.service';

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(<any>TablesRoutes)
  ],
  declarations: [
    TablesComponent,
    LeagueTableComponent
  ],
  exports: [
    TablesComponent,
    LeagueTableComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TablesModule { }
