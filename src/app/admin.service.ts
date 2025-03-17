import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}

  loginAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/login`, adminData);
  }

  getEmployees(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/employees`, { headers });
  }
}
