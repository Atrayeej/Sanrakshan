import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://your-backend-api-url.com';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    // Make an HTTP POST request to the registration endpoint
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
