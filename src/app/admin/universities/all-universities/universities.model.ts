import { formatDate } from '@angular/common';
export class Universities {
  photo:string;
  guid:string;
  code:string;
  nom:string;
  telephone:string;
  email:string;
  adress:string;
  siteweb:string;
  constructor(universities) {
    {
      this.code = universities.code || this.getRandomID();
      this.photo = universities.photo || 'assets/images/user/user1.jpg';
      this.nom = universities.nom || '';
      this.email = universities.email || '';
      this.telephone = universities.telephone || '';
      this.adress = universities.adress || '';
      this.guid = universities.guid || '';
      this.siteweb = universities.siteweb || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
