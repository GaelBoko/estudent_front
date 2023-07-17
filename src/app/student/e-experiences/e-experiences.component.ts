import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { ExperienceService } from './experience.service';
import { FormDialogExpComponent } from './dialogs/form-dialog-exp/form-dialog-exp.component';

@Component({
  selector: 'app-e-experiences',
  templateUrl: './e-experiences.component.html',
  styleUrls: ['./e-experiences.component.sass']
})
export class EExperiencesComponent extends UnsubscribeOnDestroyAdapter
implements OnInit{
  breadscrums = [
    {
      title: 'Accueil',
      items: ['Profession'],
      active: 'Expériences pro.',
    },
  ];
  exampleDatabase: ExperienceService | null;

  experiences:any[]=[
    {
      titreProjet:'L’organisation',
      descriptionProjet:'Une bonne organisation, comprenant la gestion du temps, est une qualité capitale qui permet de mener de front plusieurs missions de manière efficace, notamment dans les métiers commerciaux et administratifs',
      domaineActivite:'Santé',
      entreprise:'IBS',
      role:"DÉVELOPPEUR ET LEAD.NET",
      periodeDebut:"Mars 2021",
      periodeFin:"Février 2022",
      missions:"",
      competences:["Système: Windows","Jenkins","Git"]
    },
    {
      titreProjet:'La capacité d’adaptation',
      descriptionProjet:'Dans un monde du travail toujours en mouvement, un employé qui se montre capable de s’adapter rapidement aux changements représente un atout majeur pour l’entreprise',
      hasMore:true,
      domaineActivite:'Assurance et banque',
      entreprise:'Adia conseils',
      role:"",
      periodeDebut:"",
      periodeFin:"",
      missions:"",
      competences:["Système: Centos","Jenkins","Jira","Git"]
    },
    {
      titreProjet:'L’autonomie',
      descriptionProjet:'Être autonome dans son travail montre que vous possédez les connaissances et la confiance nécessaires pour prendre les bonnes décisions seul.',
      hasMore:false,
      domaineActivite:'Aviation',
      entreprise:'LS',
      role:"",
      periodeDebut:"",
      periodeFin:"",
      missions:"",
      competences:["Système: Ubuntu","Jenkins","Jira","Github"]
    }
  ];

  constructor( public httpClient: HttpClient,
    public dialog: MatDialog,
    public experienceService: ExperienceService,
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
    var cp= this.experiences.indexOf(item);
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
    const dialogRef = this.dialog.open(FormDialogExpComponent, {
      data: {
        teachers: this.experienceService,
        action: 'add',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.experienceService.getDialogData()
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
