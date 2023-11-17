import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  password: string = '';
  strength: string[] = Array(3).fill('gray');

  strengthLabels: string[] = ['Simple password', 'Normal password', 'Strong password'];

  updateStrength() {
    const length = this.password.length;
    
    if (length === 0) {
      this.strength = Array(3).fill('gray');
    } else if (length < 8) {
      this.strength = Array(3).fill('red');
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = Array(3).fill('green');
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.strength = ['yellow', 'yellow', 'gray'];
      } else {
        this.strength = ['red', 'gray', 'gray'];
      }
    }
  }

  constructor() { }

}
