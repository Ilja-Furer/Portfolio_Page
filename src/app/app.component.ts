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
  overlay!: ElementRef;

  disabled = this.isRoot();
  playAnimation = this.isRoot();

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.disabled = this.isRoot();
      }
    })
  }

  ngAfterViewInit(): void {
    this.overlay.nativeElement.addEventListener('animationend', () => {
      this.playAnimation = false;
    });
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
