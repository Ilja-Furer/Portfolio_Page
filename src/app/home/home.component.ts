import { Component } from '@angular/core';
import { RandomImageComponent } from '../random-image/random-image.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    RandomImageComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navigateToHobbies(): void {

  }
}
