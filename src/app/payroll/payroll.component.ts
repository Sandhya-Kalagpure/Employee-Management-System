import { Component } from '@angular/core';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  payroll = {
    employeeId: 0,
    baseSalary: 0,
    bonus: 0,
    deductions: 0,
    payDate: ''
  };

  constructor(private payrollService: PayrollService) {}

  calculatePayroll() {
    // ✅ Convert to numeric values and prevent NaN
    this.payroll.employeeId = Number(this.payroll.employeeId) || 0;
    this.payroll.baseSalary = Number(this.payroll.baseSalary) || 0;
    this.payroll.bonus = Number(this.payroll.bonus) || 0;
    this.payroll.deductions = Number(this.payroll.deductions) || 0;

    console.log('Payroll Data:', this.payroll);

    this.payrollService.addPayroll(this.payroll).subscribe(
      () => alert('Payroll record added successfully'),
      (error: any) => console.error('Error:', error)
    );
  }
}
