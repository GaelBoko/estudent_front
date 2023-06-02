import { formatDate } from '@angular/common';
export class CycleAttendance {
  id: number;
  img: string;
  rollNo: string;
  sName: string;
  class: string;
  date: string;
  status: string;
  note: string;
  constructor(cycleAttendance) {
    {
      this.id = cycleAttendance.id || this.getRandomID();
      this.img = cycleAttendance.img || 'assets/images/user/user1.jpg';
      this.rollNo = cycleAttendance.rollNo || '';
      this.sName = cycleAttendance.sName || '';
      this.class = cycleAttendance.class || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.status = cycleAttendance.status || '';
      this.note = cycleAttendance.note || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
