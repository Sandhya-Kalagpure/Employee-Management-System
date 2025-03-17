import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  attendance = {
    employeeId: '',
    date: '',
    status: '',
    checkInTime: '',   
    checkOutTime: ''  
  };

  constructor(private attendanceService: AttendanceService) {}

  markAttendance() {
    this.attendanceService.markAttendance(this.attendance).subscribe(
      () => alert('Attendance marked successfully'),
      (error: any) => console.error('Error:', error)
    );
  }
}
