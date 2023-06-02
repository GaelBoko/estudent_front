import { formatDate } from '@angular/common';
export class Universities {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  cycle: string;
  rollNo: string;
  constructor(universities) {
    {
      this.id = universities.id || this.getRandomID();
      this.img = universities.avatar || 'assets/images/user/user1.jpg';
      this.name = universities.name || '';
      this.email = universities.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = universities.gender || '';
      this.mobile = universities.mobile || '';
      this.cycle = universities.cycle || '';
      this.rollNo = universities.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
