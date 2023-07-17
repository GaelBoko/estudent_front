import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-e-offre-formation-item',
  templateUrl: './e-offre-formation-item.component.html',
  styleUrls: ['./e-offre-formation-item.component.sass']
})
export class EOffreFormationItemComponent {
  constructor(private snackBar: MatSnackBar) {}
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
