import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppComponent } from './app.component';
import { RandomImageComponent } from './random-image/random-image.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RandomImageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule  // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
