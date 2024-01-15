import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-regview',
  templateUrl: './regview.component.html',
  styleUrls: ['./regview.component.css']
})
export class RegviewComponent implements OnInit {

  viewreg: any[] = [];
  batchData: any[] = [];

  constructor(private api: ApiService) {
    this.dataFromApi();
  }

  dataFromApi = () => {
    this.api.view().subscribe(
      response => {
        this.viewreg = response;
        this.organizeDataByBatch();
      }
    );
  }

  organizeDataByBatch(): void {
    const batches = new Set(this.viewreg.map(item => item.batch));

    batches.forEach(batch => {
      const registrationsForBatch = this.viewreg.filter(item => item.batch === batch);
      this.batchData.push({ batch, registrations: registrationsForBatch });
    });
  }

  ngOnInit(): void {
  }
}
