import { Component, OnInit, AfterViewInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image/random-image.component';
import { AareService } from './aare.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RandomImageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, AfterViewInit {
  firstName: string = 'ILJA';
  lastName: string = 'FURER';
  moveToTop: boolean = false;
  fadeOut: boolean = false;
  showHobbies: boolean = false;  
  showProjects: boolean = false;  
  appLoaded: boolean = false;  // Add loading state
  aareGuruService = inject(AareService)

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Optional: Simulate delay to visualize loading screen
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.moveToTop = true;
        this.cdr.detectChanges();
      }, 500);
    }, 2000);
    this.aareGuruService.getAareData().subscribe(aareData => console.log(aareData))
  }

  ngAfterViewInit() {
    // Mark app as loaded after view initialization
    setTimeout(() => {
      this.appLoaded = true;
      document.documentElement.classList.add('loaded');
      document.body.classList.add('loaded');
      this.cdr.detectChanges();  // Ensure changes are detected
    }, 500);  // Small delay to ensure animations/css are applied
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