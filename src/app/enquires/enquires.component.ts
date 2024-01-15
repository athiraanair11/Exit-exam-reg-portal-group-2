import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enquires',
  templateUrl: './enquires.component.html',
  styleUrls: ['./enquires.component.css']
})
export class EnquiresComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  
  dataFromApi=()=>{

    this.api.enquiry().subscribe(

      response=>{

        this.viewenquiry=response
      }
    )
  }

viewenquiry:any=[]


  ngOnInit(): void {
  }

}
