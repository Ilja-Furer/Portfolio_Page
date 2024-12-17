import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firstName = 'ILJA ';
  lastName = 'FURER';
  animationDone = false;

  ngOnInit() {
    setTimeout(() => {
      this.animationDone = true;
    }, 2000);
  }
}
