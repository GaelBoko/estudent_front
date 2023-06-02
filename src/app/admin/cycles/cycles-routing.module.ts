import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCyclesComponent } from './all-cycles/all-cycles.component';
import { AddCycleComponent } from './add-cycle/add-cycle.component';
import { EditCycleComponent } from './edit-cycle/edit-cycle.component';
import { AboutCycleComponent } from './about-cycle/about-cycle.component';
import { CycleAttendanceComponent } from './cycle-attendance/cycle-attendance.component';

const routes: Routes = [
  {
    path: 'all-cycles',
    component: AllCyclesComponent,
  },
  {
    path: 'add-cycle',
    component: AddCycleComponent,
  },
  {
    path: 'edit-cycle',
    component: EditCycleComponent,
  },
  {
    path: 'about-cycle',
    component: AboutCycleComponent,
  },
  {
    path: 'cycle-attendance',
    component: CycleAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyclesRoutingModule {}
