import { formatDate } from '@angular/common';
export class Cycles {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  cycle: string;
  rollNo: string;
  constructor(cycles) {
    {
      this.id = cycles.id || this.getRandomID();
      this.img = cycles.avatar || 'assets/images/user/user1.jpg';
      this.name = cycles.name || '';
      this.email = cycles.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = cycles.gender || '';
      this.mobile = cycles.mobile || '';
      this.cycle = cycles.cycle || '';
      this.rollNo = cycles.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
