import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-cycle',
  templateUrl: './about-cycle.component.html',
  styleUrls: ['./about-cycle.component.sass'],
})
export class AboutCycleComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Cycle'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
