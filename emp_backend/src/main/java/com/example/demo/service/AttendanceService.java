package com.example.demo.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.model.Attendance;
import com.example.demo.repository.AttendanceRepository;

@Service
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    // ✅ Mark Attendance
    public Attendance markAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    // ✅ Get Attendance by Employee ID
    public List<Attendance> getAttendanceByEmployeeId(Long employeeId) {
        return attendanceRepository.findByEmployeeId(employeeId);
    }

    // ✅ Get Attendance by Date
    public List<Attendance> getAttendanceByDate(java.time.LocalDate date) {
        return attendanceRepository.findByDate(date);
    }
}