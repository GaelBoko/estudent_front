import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  checked: boolean;
  imageUrl: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  assignTo: string;
  date: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    checked: false,
    imageUrl: 'assets/images/user/user1.jpg',
    name: 'Tim Hank',
    email: 'test@example.com',
    subject: 'Image not Proper',
    status: 'closed',
    assignTo: 'John Deo',
    date: '27/05/2016',
    action: '',
  },
];

@Component({
  selector: 'app-e-formation-encours',
  templateUrl: './e-formation-encours.component.html',
  styleUrls: ['./e-formation-encours.component.sass']
})
export class EFormationEncoursComponent implements OnInit {
  displayedColumns: string[] = [
    'checked',
    'imageUrl',
    'name',
    'email',
    'subject',
    'status',
    'assignTo',
    'date',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  breadscrums = [
    {
      title: 'Support',
      items: ['Apps'],
      active: 'Support',
    },
  ];
  constructor() {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
