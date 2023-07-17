export class Competence {
  id:number;
  titre:string;
  description:string;
  hasMore:boolean;
  domaine:string;
  niveau:number;

  constructor(competence){
    this.id=competence.id;
    this.titre=competence.titre;
    this.description=competence.description;
    this.hasMore=competence.hasMore;
    this.domaine=competence.domaine;
  }
}
