import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-etablissement',
  templateUrl: './about-etablissement.component.html',
  styleUrls: ['./about-etablissement.component.sass'],
})
export class AboutEtablissementComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Etablissement'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
