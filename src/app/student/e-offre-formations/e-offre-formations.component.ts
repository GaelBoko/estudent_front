import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-e-offre-formations',
  templateUrl: './e-offre-formations.component.html',
  styleUrls: ['./e-offre-formations.component.sass']
})
export class EOffreFormationsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Accueil',
      items: ['Ademique'],
      active: 'Formations',
    },
  ];

  constructor(private snackBar: MatSnackBar) {}
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  ngOnInit() {}
}
