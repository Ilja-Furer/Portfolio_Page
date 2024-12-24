import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  location = inject(Location);
  router = inject(Router);

  disabled = this.shouldDisable();

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.disabled = this.shouldDisable();
      }
    })
  }

  navigateBack(): void {
    if (!this.location.isCurrentPathEqualTo("/")) {
      this.location.back();
      this.disabled = this.shouldDisable();
    }
  }

  private shouldDisable(): boolean {
    return this.location.isCurrentPathEqualTo("/");
  }
}
