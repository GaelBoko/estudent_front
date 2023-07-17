export class Experience {
  id:number;
  titreProjet:string;
  descriptionProjet:string;
  domaineActivite:string;
  role:string;
  periodeDebut:string;
  periodeFin:string;
  missions:string;
  competences:string[];

  constructor(experience){
    this.id=experience.id;
    this.titreProjet=experience.titreProjet;
    this.descriptionProjet=experience.descriptionProjet;
    this.domaineActivite=experience.domaineActivite;
    this.role=experience.role;
    this.periodeDebut=experience.periodeDebut;
    this.periodeFin=experience.periodeFin;
    this.missions=experience.missions;
    this.competences=experience.competences;
  }
}
