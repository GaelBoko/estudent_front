import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { ECursus } from '../e-cursus';
import { CursusService } from '../e-cursus/cursus.service';
import { DeleteCurComponent } from './dialogs/delete-cur/delete-cur.component';
import { FormDialogCurComponent } from './dialogs/form-dialog-cur/form-dialog-cur.component';

@Component({
  selector: 'app-e-cursus',
  templateUrl: './e-cursus.component.html',
  styleUrls: ['./e-cursus.component.sass']
})
export class ECursusComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  breadscrums = [
    {
      title: 'Accueil',
      items: ['Cursus'],
      active: 'Mon cursus',
    },
  ];
  exampleDatabase: CursusService | null;
  id: number;
  selection = new SelectionModel<ECursus>(true, []);

  monCursus: any[] = [
    {
      diplomeObtenu: 'CEPE',
      description: 'Certificat d\'Études Primaires Élémentaires',
      niveauScolaire: 'CEM2',
      duree: '6 ans',
      etablissement: "Ecole primaire Bernard NTSIKA MBOKO",
      dateDebut: "Octobre 1992",
      dateFin: "Juin 1998",
      credit: 0,
      matieres: ["Maths", "Français", "Physique", "SVT", "Histoire Geo"]
    },
    {
      diplomeObtenu: 'BEPC',
      description: 'Brevet d\'Études du Premier Cycle',
      niveauScolaire: '3ème',
      duree: '4 ans',
      etablissement: "CEG Saint Therèse de Nkengue",
      dateDebut: "Octobre 2001",
      dateFin: "Juin 2005",
      credit: 0,
      matieres: ["Maths", "EPS", "Anglais", "Français", "Physique", "SVT", "Histoire Geo"]
    },
    {
      diplomeObtenu: 'BAC',
      description: 'Baccalauréat série C',
      niveauScolaire: 'Terminal',
      duree: '4 ans',
      etablissement: "Lycée de Mouyondzi",
      dateDebut: "Octobre 2005",
      dateFin: "Juin 2009",
      credit: 0,
      matieres: ["Maths", "Anglais", "Philosophie", "Français", "Physique", "SVT", "Histoire Geo"]
    },
  ];

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public cursusService: CursusService,
    private snackBar: MatSnackBar) {
    super();
  }

  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  ngOnInit() { }

  getRange(n: number): number[] {
    console.log(Array.from({ length: n }, (_, i) => i));
    return Array.from({ length: n }, (_, i) => i);
  }

  addNew() {
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogCurComponent, {
      data: {
        cursus: this.cursusService,
        action: 'add',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.cursusService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }


  editCall(row) {
    this.id = row.id;
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogCurComponent, {
      data: {
        cursus: row,
        action: 'edit',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] =
          this.cursusService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }

  deleteItem(row) {
    this.id = row.id;
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteCurComponent, {
      data: row,
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      //if (result === 1) {
      if (this.id != null) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.removeSelectedRows(this.id);
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });


  }


  removeSelectedRows(id) {
    //this.cursusService.deleteCursus(id);
    this.refreshTable();
    this.showNotification(
      'snackbar-danger',
      ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }

  private refreshTable() {
    //this.paginator._changePageSize(this.paginator.pageSize);
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
