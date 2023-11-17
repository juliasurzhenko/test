import { Component, Input } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password-strenght',
  templateUrl: './password-strenght.component.html',
  styleUrls: ['./password-strenght.component.scss']
})
export class PasswordStrenghtComponent {

  constructor(public ps: PasswordService){

  }
}