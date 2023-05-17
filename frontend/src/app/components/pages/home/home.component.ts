import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name = '';
  message = '';

  getValueName(input: string) {
    this.name = input;
  }
  getValueMessage(input: string) {
    this.message = input;
  }
  sendMessage() {
    console.log(this.name);
    console.log(this.message);
  }
}
