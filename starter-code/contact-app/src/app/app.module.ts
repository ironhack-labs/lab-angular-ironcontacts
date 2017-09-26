import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    PageContactComponent,
    AddContactComponent
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
