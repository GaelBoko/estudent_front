import { formatDate } from '@angular/common';
export class Departments {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  department: string;
  rollNo: string;
  constructor(departments) {
    {
      this.id = departments.id || this.getRandomID();
      this.img = departments.avatar || 'assets/images/user/user1.jpg';
      this.name = departments.name || '';
      this.email = departments.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = departments.gender || '';
      this.mobile = departments.mobile || '';
      this.department = departments.department || '';
      this.rollNo = departments.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
