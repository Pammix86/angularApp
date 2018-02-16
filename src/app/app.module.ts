import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InputTextModule,DataTableModule,ButtonModule,DialogModule,InputTextareaModule } from 'primeng/primeng';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    MenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
