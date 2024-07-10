import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-date-range-request',
  templateUrl: './date-range-request.component.html',
  styleUrls: ['./date-range-request.component.css']
})
export class DateRangeRequestComponent {
  dateRangeForm: FormGroup;
  requests: any[] = [];

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.dateRangeForm = this.fb.group({
      dataMin: ['', Validators.required],
      dataMax: ['', Validators.required],
      max: [10, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.dateRangeForm.valid) {
      const { dataMin, dataMax, max } = this.dateRangeForm.value;
      this.richiesteService.getRequestsByDateRange(dataMin, dataMax, max).subscribe(
        (data: any) => {
          this.requests = data.data || data; // Assicurati di ottenere i dati corretti
        },
        (error) => {
          console.error('Errore durante il recupero delle richieste per intervallo di date:', error);
        }
      );
    }
  }
}
