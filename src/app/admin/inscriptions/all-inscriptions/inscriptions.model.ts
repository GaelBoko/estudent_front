import { formatDate } from '@angular/common';
export class Inscriptions {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  inscription: string;
  rollNo: string;
  constructor(inscriptions) {
    {
      this.id = inscriptions.id || this.getRandomID();
      this.img = inscriptions.avatar || 'assets/images/user/user1.jpg';
      this.name = inscriptions.name || '';
      this.email = inscriptions.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = inscriptions.gender || '';
      this.mobile = inscriptions.mobile || '';
      this.inscription = inscriptions.inscription || '';
      this.rollNo = inscriptions.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
