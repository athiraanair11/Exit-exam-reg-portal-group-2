import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {

  name = ""
  email = ""
  batch = ""
  gender = ""
  mobilenum = ""

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  add(): void {
    const registrationData = {
      name: this.name,
      email: this.email,
      mobilenum: this.mobilenum,
      batch: this.batch,
      gender: this.gender
    };
    const mobileRegex = /^\d{10}$/;

if (!mobileRegex.test(registrationData.mobilenum)) {
  alert("Invalid mobile number. Please enter a 10-digit number.");
  return; // Stop execution if validation fails
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(registrationData.email)) {
  alert("Invalid email address. Please enter a valid email.");
  return; // Stop execution if validation fails
}

    this.api.reg(registrationData).subscribe(
      (response: any) => {
        console.log("Response", response);

        if (response.success) {
          alert("Registration successful!");
          this.router.navigate(['/']);  // Redirect to the dashboard on successful registration
        } else {
          alert("Email already registered. Please use a different email.");
        }
      },
      (error) => {
        console.error("Error:", error);
        alert("Error");
      }
    );
  }
}