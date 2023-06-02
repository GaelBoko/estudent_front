import { formatDate } from '@angular/common';
export class DepartementAttendance {
  id: number;
  img: string;
  rollNo: string;
  sName: string;
  class: string;
  date: string;
  status: string;
  note: string;
  constructor(departementAttendance) {
    {
      this.id = departementAttendance.id || this.getRandomID();
      this.img = departementAttendance.img || 'assets/images/user/user1.jpg';
      this.rollNo = departementAttendance.rollNo || '';
      this.sName = departementAttendance.sName || '';
      this.class = departementAttendance.class || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.status = departementAttendance.status || '';
      this.note = departementAttendance.note || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
