import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firstName = 'Ilja';
  lastName = 'Furer';
  fadeOut = false;
  moveToTop = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('Animation starts');
    setTimeout(() => {
      this.fadeOut = true;
      console.log('Name faded out');

      setTimeout(() => {
        this.moveToTop = true;
        console.log('moveToTop set to true:', this.moveToTop);
        this.cdr.detectChanges(); // Force update if needed
      }, 500);
    }, 2000);
  }
}
