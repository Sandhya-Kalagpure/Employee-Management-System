package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import com.example.demo.service.AttendanceSummaryService;
import com.example.demo.model.AttendanceSummary;

@RestController
@RequestMapping("/api/v1/attendance-summary")
public class AttendanceSummaryController {

    private final AttendanceSummaryService attendanceSummaryService;

    public AttendanceSummaryController(AttendanceSummaryService attendanceSummaryService) {
        this.attendanceSummaryService = attendanceSummaryService;
    }

    @GetMapping("/{employeeId}")
    public AttendanceSummary getAttendanceSummary(@PathVariable Long employeeId) {
        return attendanceSummaryService.getAttendanceSummary(employeeId);
    }
}
