import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXDetailsComponent } from './space-x/space-x-details/space-x-details.component';
import { SpaceXFilterComponent } from './space-x/space-x-filter/space-x-filter.component';
import { SpaceXComponent } from './space-x/space-x.component';


@NgModule({
  declarations: [
    AppComponent,
    SpaceXComponent,
    SpaceXDetailsComponent,
    SpaceXFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
