export class ECursus {
  id:number;
  diplomeObtenu:string;
  description:string;
  niveauScolaire:boolean;
  duree:string;
  matieres:string[];
  credit:string;//Si système de crédits est utilisé
  etablissement:string;
  dateDebut:string;
  dateFin:string;

  constructor(competence){
    this.id=competence.id;
    this.diplomeObtenu=competence.diplomeObtenu;
    this.description=competence.description;
    this.niveauScolaire=competence.niveauScolaire;
    this.duree=competence.duree;
  }
}
