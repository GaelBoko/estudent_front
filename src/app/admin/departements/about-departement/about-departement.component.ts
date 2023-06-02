import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-departement',
  templateUrl: './about-departement.component.html',
  styleUrls: ['./about-departement.component.sass'],
})
export class AboutDepartementComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Departement'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
