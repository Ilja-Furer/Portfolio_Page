import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  location = inject(Location);
  router = inject(Router);
  
  @ViewChild('overlay')
  overlay?: ElementRef;

  @ViewChild('slider')
  slider?: ElementRef;

  disabled = this.isRoot();
  playAnimation = this.isRoot();
  showContent = false;

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.disabled = this.isRoot();
      }
    })
  }

  ngAfterViewInit(): void {
    if (this.overlay && this.slider) {
      this.overlay.nativeElement.addEventListener('animationend', () => {
        this.playAnimation = false;
      });

      this.slider.nativeElement.addEventListener('animationend', () => {
        this.showContent = true;
      })
    } else {
      this.playAnimation = false;
      this.showContent = true;
    }
  }

  navigateBack(): void {
    if (!this.location.isCurrentPathEqualTo("/")) {
      this.location.back();
      this.disabled = this.isRoot();
    }
  }

  private isRoot(): boolean {
    return this.location.isCurrentPathEqualTo("/");
  }
}
