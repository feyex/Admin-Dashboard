import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public sliders: Array<any> = [];

  constructor() { 
    this.sliders.push(
      {
          imagePath: 'assets/image/slider1.jpg',
          label: 'Admin Dashboard',
          text:
              'Satisfying your dream .'
      },
      {
          imagePath: 'assets/image/slider2.jpg',
          label: 'Admin Dashboard',
          text: 'Satisfying your dream '
      },
      {
          imagePath: 'assets/image/slider3.jpg',
          label: 'Admin Dashboard',
          text:
              'Satisfying your dream .'
      }
  );
  }

  ngOnInit() {
  }

}
