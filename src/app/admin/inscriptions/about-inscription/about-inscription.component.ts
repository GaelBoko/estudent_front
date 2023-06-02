import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-inscription',
  templateUrl: './about-inscription.component.html',
  styleUrls: ['./about-inscription.component.sass'],
})
export class AboutInscriptionComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Inscription'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
