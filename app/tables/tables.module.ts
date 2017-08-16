import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule, NativeScriptHttpModule } from 'nativescript-angular';

import { TablesRoutes } from './tables.routes';
import { TablesComponent, LeagueTableComponent } from './'

import { FootballService } from '../football.service';

@NgModule({
	imports: [
		NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forChild(<any>TablesRoutes)
	],
	declarations: [
    // TablesComponent,
    // LeagueTableComponent
  ],
  providers: [
    FootballService
  ],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class TablesModule { }
