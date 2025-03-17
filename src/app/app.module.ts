import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

// ✅ Import HomeComponent directly
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PayrollService } from './payroll.service';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ShowDetailsComponent,
    AdminLoginComponent,
    AttendanceComponent,
    PayrollComponent,
    AttendanceSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HomeComponent // ✅ Import standalone component here
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    PayrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
