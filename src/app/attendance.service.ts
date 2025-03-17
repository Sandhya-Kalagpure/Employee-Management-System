import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseUrl = 'http://localhost:8080/api/v1/attendance';

  constructor(private http: HttpClient) {}

  markAttendance(attendance: any) {
    return this.http.post(this.baseUrl, attendance);
  }
}
