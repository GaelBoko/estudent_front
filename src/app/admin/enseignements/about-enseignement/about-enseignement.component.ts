import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-department',
  templateUrl: './about-department.component.html',
  styleUrls: ['./about-department.component.sass'],
})
export class AboutDepartmentComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Department'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
