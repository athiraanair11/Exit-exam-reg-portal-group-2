import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name=""
  email=""
  content=""

  constructor(private api:ApiService,private router: Router) { }

  ngOnInit(): void {
  }

  read = () => {
    let data = {
      "name": this.name,
      "email": this.email,
      "content": this.content
    };
  
    console.log(data);
  
    this.api.add(data).subscribe(
      (response: any) => {
        console.log(response);
        alert("Sent successfully");
  
        // Provide the route path or navigate to the desired component
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error(error);
        alert("Error sending data");
      }
    );
  }
}