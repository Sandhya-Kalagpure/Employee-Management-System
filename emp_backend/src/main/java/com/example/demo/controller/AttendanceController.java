package com.example.demo.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Attendance;
import com.example.demo.service.AttendanceService;

@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    // ✅ Mark Attendance
    @PostMapping
    public Attendance markAttendance(@RequestBody Attendance attendance) {
        return attendanceService.markAttendance(attendance);
    }

    // ✅ Get Attendance by Employee ID
    @GetMapping("/{employeeId}")
    public List<Attendance> getAttendanceByEmployeeId(@PathVariable Long employeeId) {
        return attendanceService.getAttendanceByEmployeeId(employeeId);
    }

    // ✅ Get Attendance by Date
    @GetMapping("/date/{date}")
    public List<Attendance> getAttendanceByDate(@PathVariable String date) {
        return attendanceService.getAttendanceByDate(LocalDate.parse(date));
    }
}
