import { formatDate } from '@angular/common';
export class Etablissements {
  guid: string;
  codeEts: string;
  nom: string;
  nomResponsable: string;
  telResponsable: string;
  adresse: string;
  telephone: string;
  email: string;
  siteweb: string;
  pays: string;
  ville: string;
  latitude:string;
  longitude:string;
  universite:string
  universiteGuid:string
  constructor(etablissements) {
    {
      this.guid = etablissements.guid || this.getRandomID();
      this.codeEts = etablissements.codeEts || '';
      this.nom = etablissements.nom || '';
      this.email = etablissements.email || '';
      this.telephone = '';
      this.adresse = etablissements.adress || '';
      this.pays = etablissements.pays || '';
      this.ville = etablissements.ville || '';
      this.nomResponsable = etablissements.nomResponsable || '';
      this.telResponsable = etablissements.telResponsable || '';
      this.longitude = etablissements.nomResponsable || '';
      this.latitude = etablissements.nomResponsable || '';
      this.universite = etablissements.nomResponsable || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
