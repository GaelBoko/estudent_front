import { formatDate } from '@angular/common';
export class Etablissements {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  etablissement: string;
  rollNo: string;
  constructor(etablissements) {
    {
      this.id = etablissements.id || this.getRandomID();
      this.img = etablissements.avatar || 'assets/images/user/user1.jpg';
      this.name = etablissements.name || '';
      this.email = etablissements.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = etablissements.gender || '';
      this.mobile = etablissements.mobile || '';
      this.etablissement = etablissements.etablissement || '';
      this.rollNo = etablissements.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
