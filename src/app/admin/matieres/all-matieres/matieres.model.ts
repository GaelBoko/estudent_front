import { formatDate } from '@angular/common';
export class Matieres {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  matiere: string;
  degree: string;
  constructor(matieres) {
    {
      this.id = matieres.id || this.getRandomID();
      this.img = matieres.avatar || 'assets/images/user/user1.jpg';
      this.name = matieres.name || '';
      this.email = matieres.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = matieres.gender || '';
      this.mobile = matieres.mobile || '';
      this.matiere = matieres.matiere || '';
      this.degree = matieres.degree || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
