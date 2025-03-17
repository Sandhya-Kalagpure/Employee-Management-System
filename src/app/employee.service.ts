import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {}

  // ✅ Get Auth Headers with Token
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Send token
    });
  }
  
  // ✅ Get Employee List
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL).pipe(
      tap(data => console.log('Fetched Employees:', data)),
      catchError(this.handleError)
    );
  }

  // ✅ Add Employee
  addEmployee(employee: Employee): Observable<Object> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Adding employee:', employee);
    return this.httpClient.post(this.baseURL, employee, { headers }).pipe(
      tap(response => console.log('Employee added:', response)),
      catchError(this.handleError)
    );
  }

  // ✅ Get Employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    console.log(`Fetching employee with ID ${id}`);
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`).pipe(
      tap(data => console.log(`Fetched employee with ID ${id}:`, data)),
      catchError(this.handleError)
    );
  }

  // ✅ Update Employee
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(`Updating employee with ID ${id}:`, employee);
    return this.httpClient.put(`${this.baseURL}/${id}`, employee, { headers }).pipe(
      tap(response => console.log(`Updated employee with ID ${id}:`, response)),
      catchError(this.handleError)
    );
  }

  // ✅ Delete Employee
  deleteEmployee(id: number): Observable<Object> {
    console.log(`Deleting employee with ID ${id}`);
    return this.httpClient.delete(`${this.baseURL}/${id}`).pipe(
      tap(() => console.log(`Deleted employee with ID ${id}`)),
      catchError(this.handleError)
    );
  }

  // ✅ Centralized Error Handling
  private handleError(error: HttpErrorResponse) {
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
