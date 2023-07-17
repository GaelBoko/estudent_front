import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { CompetenceServiceService } from './competence-service.service';
import { FormDialogCptComponent } from './dialogs/form-dialog-cpt/form-dialog-cpt.component';

@Component({
  selector: 'app-e-competences',
  templateUrl: './e-competences.component.html',
  styleUrls: ['./e-competences.component.sass']
})


export class ECompetencesComponent extends UnsubscribeOnDestroyAdapter
implements OnInit{
  breadscrums = [
    {
      title: 'Accueil',
      items: ['Profession'],
      active: 'Compétences',
    },
  ];
  exampleDatabase: CompetenceServiceService | null;

  competences:any[]=[
    {
      titre:'L’organisation',
      description:'Une bonne organisation, comprenant la gestion du temps, est une qualité capitale qui permet de mener de front plusieurs missions de manière efficace, notamment dans les métiers commerciaux et administratifs',
      hasMore:false,
      domaine:'Santé',
      entreprise:'IBS',
      niveau:2
    },
    {
      titre:'La capacité d’adaptation',
      description:'Dans un monde du travail toujours en mouvement, un employé qui se montre capable de s’adapter rapidement aux changements représente un atout majeur pour l’entreprise',
      hasMore:true,
      domaine:'Assurance et banque',
      entreprise:'Adia conseils',
      niveau:4
    },
    {
      titre:'L’autonomie',
      description:'Être autonome dans son travail montre que vous possédez les connaissances et la confiance nécessaires pour prendre les bonnes décisions seul.',
      hasMore:false,
      domaine:'Aviation',
      entreprise:'LS',
      niveau:3
    }
  ];

  constructor( public httpClient: HttpClient,
    public dialog: MatDialog,
    public competenceService: CompetenceServiceService,
    private snackBar: MatSnackBar) {
    super();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  ngOnInit() {}

  getIndex(item: string): number {
    var cp= this.competences.indexOf(item);
    console.log("TATTA: ",cp%2)
    return cp%2;
  }

  getRange(n: number): number[] {
    console.log(Array.from({length: n}, (_, i) => i));
    return Array.from({length: n}, (_, i) => i);
  }

  addNew(){
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogCptComponent, {
      data: {
        teachers: this.competenceService,
        action: 'add',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.competenceService.getDialogData()
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

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
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


