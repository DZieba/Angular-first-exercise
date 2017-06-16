import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PlayListComponent} from "./playlist.component";
import { FormsModule } from '@angular/forms';
import {ApiTestComponent} from './api-test.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
