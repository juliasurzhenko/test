import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { PasswordInputComponent } from './password/password-input/password-input.component';
import { PasswordStrenghtComponent } from './password/password-strenght/password-strenght.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordInputComponent,
    PasswordStrenghtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
