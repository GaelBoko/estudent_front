import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.sass'],
})
export class AllCourseComponent implements OnInit {
  breadscrums = [
    {
      title: 'Les Cours',
      items: ['Cours'],
      active: 'Liste Cours',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
