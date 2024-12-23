import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-image',
  imports: [NgIf],
  templateUrl: './random-image.component.html',
  styleUrl: './random-image.component.css'
})
export class RandomImageComponent implements OnInit {
  @Input()
  possibleImages: string[] = [];
  chosenImage: string = '';

  ngOnInit(): void {
    this.chosenImage = this.possibleImages[Math.floor(Math.random() * this.possibleImages.length)]
  }
}
