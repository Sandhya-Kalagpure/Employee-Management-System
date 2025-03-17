import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private baseUrl = 'http://localhost:8080/api/v1/payroll';

  constructor(private http: HttpClient) {}

  addPayroll(payroll: any) {
    return this.http.post(this.baseUrl, payroll);
  }

  getPayrollByEmployeeId(employeeId: number) {
    return this.http.get(`${this.baseUrl}/${employeeId}`);
  }
}
