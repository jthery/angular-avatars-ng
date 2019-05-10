import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from './avatar/avatar.component';
import { ListAvatarsComponent } from './list-avatars/list-avatars.component';
import { MaterialModule } from './material.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AvatarCreateComponent } from './avatar-create/avatar-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ListAvatarsComponent,
    ErrorpageComponent,
    AdminComponent,
    ContactComponent,
    AvatarCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
