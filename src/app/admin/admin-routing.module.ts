import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: 'departements',
    loadChildren: () =>
      import('./departements/departements.module').then(
        (m) => m.DepartementsModule
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./holidays/holidays.module').then((m) => m.HolidaysModule),
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then((m) => m.FeesModule),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./attendance/attendance.module').then((m) => m.AttendanceModule),
  },
  {
    path: 'university',
    loadChildren: () =>
      import('./universities/universities.module').then((m) => m.UniversitiesModule),
  },
  {
    path: 'etablissements',
    loadChildren: () =>
      import('./etablissements/etablissements.module').then((m) => m.EtablissementsModule),
  },
  {
    path: 'inscriptions',
    loadChildren: () =>
      import('./inscriptions/inscriptions.module').then((m) => m.InscriptionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
