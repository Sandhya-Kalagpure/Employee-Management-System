package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Payroll;
import com.example.demo.service.PayrollService;

@RestController
@RequestMapping("/api/v1/payroll")
public class PayrollController {

    private final PayrollService payrollService;

    public PayrollController(PayrollService payrollService) {
        this.payrollService = payrollService;
    }

    // ✅ Add Payroll Record
    @PostMapping
    public Payroll addPayroll(@RequestBody Payroll payroll) {
        System.out.println("Payroll Data Received: " + payroll);
        return payrollService.addPayroll(payroll);
    }

    // ✅ Get Payroll by Employee ID
    @GetMapping("/{employeeId}")
    public List<Payroll> getPayrollByEmployeeId(@PathVariable Long employeeId) {
        return payrollService.getPayrollByEmployeeId(employeeId);
    }
}
