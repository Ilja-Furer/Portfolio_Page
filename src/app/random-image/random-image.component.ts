import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-random-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {
  images: string[] = [
    'assets/images/spotify.png',
    'assets/images/UCI_DH.png',
    'assets/images/aare_guru.jpg',
  ];

  randomImage: string = '';

  ngOnInit() {
    this.showRandomImage();
  }

  showRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    console.log("Random Index:", randomIndex);
    this.randomImage = this.images[randomIndex];
  }
}