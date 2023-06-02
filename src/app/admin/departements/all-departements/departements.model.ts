import { formatDate } from '@angular/common';
export class Departements {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  departement: string;
  rollNo: string;
  constructor(departements) {
    {
      this.id = departements.id || this.getRandomID();
      this.img = departements.avatar || 'assets/images/user/user1.jpg';
      this.name = departements.name || '';
      this.email = departements.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = departements.gender || '';
      this.mobile = departements.mobile || '';
      this.departement = departements.departement || '';
      this.rollNo = departements.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
