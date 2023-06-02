import { formatDate } from '@angular/common';
export class DepartmentAttendance {
  id: number;
  img: string;
  rollNo: string;
  sName: string;
  class: string;
  date: string;
  status: string;
  note: string;
  constructor(departmentAttendance) {
    {
      this.id = departmentAttendance.id || this.getRandomID();
      this.img = departmentAttendance.img || 'assets/images/user/user1.jpg';
      this.rollNo = departmentAttendance.rollNo || '';
      this.sName = departmentAttendance.sName || '';
      this.class = departmentAttendance.class || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.status = departmentAttendance.status || '';
      this.note = departmentAttendance.note || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
