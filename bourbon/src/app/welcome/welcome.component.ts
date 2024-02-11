import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  beforeTimeout: boolean = true;
  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      this.beforeTimeout = false;
    }, 1000);
  }
}
