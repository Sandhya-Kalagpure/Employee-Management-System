package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Payroll;
import com.example.demo.repository.PayrollRepository;

@Service
public class PayrollService {

    private final PayrollRepository payrollRepository;

    public PayrollService(PayrollRepository payrollRepository) {
        this.payrollRepository = payrollRepository;
    }

    // ✅ Add Payroll Entry
    public Payroll addPayroll(Payroll payroll) {
        if (payroll.getBaseSalary() != 0) {
            double netPay = payroll.getBaseSalary() + payroll.getBonus() - payroll.getDeductions();
            payroll.setNetPay(netPay);
        } else {
            payroll.setNetPay(0);
        }
        return payrollRepository.save(payroll);
    }

    // ✅ Get Payroll for Employee
    public List<Payroll> getPayrollByEmployeeId(Long employeeId) {
        return payrollRepository.findByEmployeeId(employeeId);
    }
}
