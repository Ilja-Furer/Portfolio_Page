import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firstName: string = 'ILJA';
  lastName: string = 'FURER';
  moveToTop: boolean = false;
  fadeOut: boolean = false;
  showHobbies: boolean = false;  
  showProjects: boolean = false;  

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.moveToTop = true;
        this.cdr.detectChanges();
      }, 500);
    }, 2000);
  }

  onSlideRightTopClick() {
    console.log('Hobbies clicked!');
    this.showHobbies = true;
    this.showProjects = false;  

    document.documentElement.classList.add('no-scroll');
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  }

  onSlideRightBottomClick() {
    console.log('Projects clicked!');
    this.showProjects = true;
    this.showHobbies = false;  

    document.documentElement.classList.add('no-scroll');
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  }

  closeHobbies() {
    this.showHobbies = false;
    document.documentElement.classList.remove('no-scroll');
  }

  closeProjects() {
    this.showProjects = false;
    document.documentElement.classList.remove('no-scroll');
  }
}
