import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminData = {
    adminName: '',
    adminPassword: ''
  };

  constructor(
    private adminService: AdminService,
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    this.adminService.loginAdmin(this.adminData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        this.authService.login(response.token); // ✅ Store token
        this.router.navigate(['/show-all-employees']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials');
      }
    );
  }

  // ✅ Add cancel method
  onCancel() {
    this.adminData = { adminName: '', adminPassword: '' };
    console.log('Form reset');
  }
}
