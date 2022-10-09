import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer';

import { AuthEffects } from './auth/store/auth.effects';
import { EffectsModule } from '@ngrx/effects'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,       
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

