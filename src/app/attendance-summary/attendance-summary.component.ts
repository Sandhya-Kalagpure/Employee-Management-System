import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.css']
})
export class AttendanceSummaryComponent {
  employeeId: number = 0;
  summary: any;

  constructor(private http: HttpClient) {}

  getAttendanceSummary() {
    if (this.employeeId) {
      this.http.get(`http://localhost:8080/api/v1/attendance-summary/${this.employeeId}`)
        .subscribe((data) => {
          this.summary = data;
        });
    }
  }
}
