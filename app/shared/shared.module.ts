import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule, NativeScriptRouterModule } from 'nativescript-angular';

import { FootballService } from '../football.service';

@NgModule({
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule
  ],
  providers: [
    FootballService
  ]
})
export class SharedModule { }
