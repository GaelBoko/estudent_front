import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-university',
  templateUrl: './about-university.component.html',
  styleUrls: ['./about-university.component.sass'],
})
export class AboutUniversityComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['University'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
