import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css'],
})
export class Ejemplo4Component {
  num: number = 0;
  decrement() {
    this.num = this.num - 1;
  }

  isPrime() {
    if (this.num <= 1) return false

    for (let i = 2; i <= this.num / 2; i++) {
      if (this.num % i === 0)  return false;
    }
    return true;
  }
}
