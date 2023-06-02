import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { AboutDepartmentComponent } from './about-department/about-department.component';
import { DepartmentAttendanceComponent } from './department-attendance/department-attendance.component';

const routes: Routes = [
  {
    path: 'all-departments',
    component: AllDepartmentsComponent,
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent,
  },
  {
    path: 'edit-department',
    component: EditDepartmentComponent,
  },
  {
    path: 'about-department',
    component: AboutDepartmentComponent,
  },
  {
    path: 'department-attendance',
    component: DepartmentAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
