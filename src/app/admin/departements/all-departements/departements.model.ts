import { formatDate } from '@angular/common';
export class Departements {
  "codeDept": string;
  "nom": string;
  "etablissementId":number;
  "etablissement": string;
  constructor(departements) {
    {
      this.codeDept = departements.codeDept || this.getRandomID();
      this.nom = departements.nom || '';
      this.etablissement = departements.etablissement || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
