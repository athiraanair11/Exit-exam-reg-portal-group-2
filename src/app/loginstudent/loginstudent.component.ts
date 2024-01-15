import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.component.html',
  styleUrls: ['./loginstudent.component.css']
})
export class LoginstudentComponent implements OnInit {

  regid = '';

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  async read(): Promise<void> {
    console.log("Read method triggered");

    const data = {
      regid: this.regid
    };

    console.log("Request Data:", data);

    try {
      const response: any = await this.api.studlogin(data).toPromise();

      console.log("Response", response);
      console.log("Before conditional block");
      if (response && response.status === 200 && response.allowExit !== undefined && response.allowExit !== null && response.allowExit === true) {
        // Eligible for Exam

        alert("Invalid credentials or not eligible. Please try again.");
       
        
      } else {
        // Not eligible
        alert("Eligible for Exam");
        setTimeout(() => {
          this.router.navigate(['/reg']);
        }, 0);      }
      console.log("After conditional block");
      
   // ...
} catch (error) {
  console.error("Error:", error);
  if (error instanceof HttpErrorResponse) {
    if (error.status === 404) {
      alert("Student not found. Please check your registration ID.");
    } else if (error.status === 403) {
      alert("Access forbidden. Student not eligible.");
    } else {
      alert("Error checking eligibility. Please try again.");
    }
  }
}
// ...

  }
}
