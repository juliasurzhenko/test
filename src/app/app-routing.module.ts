import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordInputComponent } from './password/password-input/password-input.component';
import { PasswordStrenghtComponent } from './password/password-strenght/password-strenght.component';

const routes: Routes = [
  {path: 'password-input', component: PasswordInputComponent},
  {path: 'password-strenght', component: PasswordStrenghtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
