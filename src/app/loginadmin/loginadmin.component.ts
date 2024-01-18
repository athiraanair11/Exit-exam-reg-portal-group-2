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

  log(): void {
    if (this.credentials.email && this.credentials.password) {
      this.api.log(this.credentials).subscribe(
        (response: any) => {
          console.log("Login response:", response);
          if (response.success) {
            this.router.navigate([response.redirectPath]);
            alert("Login Successfully");
          } else {
            console.error("Login failed", response.message);
            alert("Invalid credentials. Login failed.");
          }
        },
        (error) => {
          console.error("Login failed", error);
          alert("Invalid credentials. Login failed.");
        }
      );
    } else {
      alert('Please enter valid email and password.');
    }
  }
}
