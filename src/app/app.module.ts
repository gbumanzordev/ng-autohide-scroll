import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoHideScrollDirective } from './directives/auto-hide-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoHideScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
