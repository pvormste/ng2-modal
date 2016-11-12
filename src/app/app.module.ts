import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OpenDirective } from './ng2-modal/open.directive';
import { ModalComponent } from './ng2-modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenDirective,
    ModalComponent
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
