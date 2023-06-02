import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-matiere',
  templateUrl: './about-matiere.component.html',
  styleUrls: ['./about-matiere.component.sass'],
})
export class AboutMatiereComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Matiere'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
