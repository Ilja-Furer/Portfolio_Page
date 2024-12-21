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
    setTimeout(() => {
      this.fadeOut = true;

      setTimeout(() => {
        this.moveToTop = true;
        this.cdr.detectChanges(); // Force update if needed
      }, 500);
    }, 2000);
  }
}
