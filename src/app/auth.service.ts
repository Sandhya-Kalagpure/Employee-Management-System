import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(token: string) {
    localStorage.setItem('token', token); // ✅ Store token in local storage
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // ✅ Check if token exists
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // ✅ Return token for HTTP requests
  }
}
