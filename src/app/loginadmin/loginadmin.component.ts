import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  login(): void {
    if (this.credentials.email && this.credentials.password) {
      // Admin login
      if (this.credentials.email === 'admin@gmail.com' && this.credentials.password === 'admin6712') {
        this.api.login(this.credentials).subscribe(
          (response) => {
            console.log('Admin login successful', response);
            this.router.navigate(['/admin']);
            alert('Admin Login Successfully');
          },
          (error) => {
            console.error('Admin login failed', error);
            alert('Invalid credentials. Login failed.');
          }
        );
      } else {
        // Student login
        if (
          (this.credentials.email === 'student1@gmail.com' || this.credentials.email === 'student2@gmail.com') &&
          (this.credentials.password === 'stud123' || this.credentials.password === 'stud2123')
        ) {
          this.api.slogin(this.credentials).subscribe(
            (response) => {
              console.log('Student login successful', response);
              this.router.navigate(['/student']);
              alert('Student Login Successfully');
            },
            (error) => {
              console.error('Student login failed', error);
              alert('Invalid credentials. Login failed.');
            }
          );
        } else {
          alert('Invalid credentials. Login failed.');
        }
      }
    } else {
      alert('Please enter both email and password.');
    }
  }
}
