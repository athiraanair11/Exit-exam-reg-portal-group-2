import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/adminlogin';
  private studUrl = 'http://localhost:3000/studentlogin';
  private regUrl = 'http://localhost:3900';
  private logUrl = 'http://localhost:3600/login';



  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, credentials);
  }
  slogin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.studUrl, credentials);
  }
  log(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.logUrl, credentials);
  }
 
  studlogin(credentials: { regid: string }): Observable<any> {
    const url = `${this.regUrl}/login`; // Use backticks for template literals
    return this.http.post(url, credentials);
  }
  


  reg(data: any): Observable<any> {
    return this.http.post("http://localhost:3500/add", data);
  }

  add(data: any): Observable<any> {
    return this.http.post("http://localhost:3800/add", data);
  }

  viewall(): Observable<any> {
    return this.http.get("http://localhost:3900/viewall");
  
  }

  view(): Observable<any> {
    return this.http.get("http://localhost:3500/viewall");
  }

  enquiry(): Observable<any> {
    return this.http.get("http://localhost:3800/viewall");
  
  }
}
