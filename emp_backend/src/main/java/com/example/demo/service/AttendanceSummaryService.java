package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.model.Attendance;
import com.example.demo.model.AttendanceSummary;
import com.example.demo.repository.PayrollRepository;
import com.example.demo.model.Payroll;

import java.util.List;

@Service
public class AttendanceSummaryService {

    private final AttendanceRepository attendanceRepository;
    private final PayrollRepository payrollRepository;

    public AttendanceSummaryService(AttendanceRepository attendanceRepository, PayrollRepository payrollRepository) {
        this.attendanceRepository = attendanceRepository;
        this.payrollRepository = payrollRepository;
    }

    public AttendanceSummary getAttendanceSummary(Long employeeId) {
        List<Attendance> attendanceList = attendanceRepository.findByEmployeeId(employeeId);
        long totalPresentDays = attendanceList.stream()
                .filter(a -> "Present".equalsIgnoreCase(a.getStatus()))
                .count();

        Payroll payroll = payrollRepository.findByEmployeeId(employeeId).stream()
                .findFirst()
                .orElse(null);

        double payment = 0;
        if (payroll != null) {
            double dailyRate = payroll.getBaseSalary() / 30; // Assuming salary is monthly
            payment = totalPresentDays * dailyRate;
        }

        return new AttendanceSummary(employeeId, totalPresentDays, payment);
    }
}
