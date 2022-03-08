import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxVarModule } from 'ngx-var';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxVarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
