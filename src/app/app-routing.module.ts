import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';
import { AttendanceComponent } from './attendance/attendance.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'show-all-employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee/:id', component: ShowDetailsComponent }, // ✅ Route for search by ID
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'attendance-summary', component: AttendanceSummaryComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
