import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-personnelle',
  templateUrl: './info-personnelle.component.html',
  styleUrls: ['./info-personnelle.component.sass']
})
export class InfoPersonnelleComponent {
  isLinear:boolean=true;
  infoIdentiteForm: UntypedFormGroup;
  coordonneesForm: UntypedFormGroup;
  autreInfoForm: UntypedFormGroup;
  choixFormForm: UntypedFormGroup;

  breadscrums = [
    {
      title: 'Accueil',
      items: ['Mes informations'],
      active: 'Identification',
    },
  ];

  constructor(private _formBuilder: UntypedFormBuilder) {}
  ngOnInit() {
    this.infoIdentiteForm = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      etatMatrimonial: ['', Validators.required],
      pieceIdentite: [''],
      numeroPasseport: [''],
      dateDelivrancePasseport: [''],
      dateExpirationPasseport: [''],
      description : ['']
    });
    this.coordonneesForm=this._formBuilder.group({
      email: ['',Validators.required],
      login: ['',Validators.required],
      telephone : ['', Validators.required],
      adresse : [''],
      pays : ['', Validators.required],
      ville : ['', Validators.required],
      quartier : ['']
    });
    this.autreInfoForm=this._formBuilder.group({
      nomTuteur: [''],
      telephoneTuteur: [''],
      etablissement: [''],
      universite: ['']
    });
    this.choixFormForm=this._formBuilder.group({
      filiere: ['']
    });
  }
}
