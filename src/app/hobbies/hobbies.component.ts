import { Component, inject, OnInit } from '@angular/core';
import { AareGuruService } from '../services/aare-guru.service';
import { AareGuruResponse } from '../models/aareGuruResponse';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit {
  aareGuruService = inject(AareGuruService);
  currentAareGuru?: AareGuruResponse;
  
  ngOnInit(): void {
    this.aareGuruService.getAareData()
      .subscribe(fromApi => this.currentAareGuru = fromApi);
  }
}
