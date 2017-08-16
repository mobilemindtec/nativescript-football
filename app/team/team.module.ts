import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule, NativeScriptHttpModule } from 'nativescript-angular';

import { TeamRoutes } from './team.routes';
import { TeamComponent, PlayerComponent } from './'

import { AgePipe } from '../age.pipe';
import { FlagPipe } from '../flag.pipe';

import { FootballService } from '../football.service';

@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
    NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forChild(<any>TeamRoutes)
	],
	declarations: [
		// TeamComponent
		// PlayerComponent
		// AgePipe,
		// FlagPipe
	],
	providers: [
		FootballService
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class TeamModule { }
