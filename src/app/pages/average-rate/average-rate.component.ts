import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-average-rate',
  templateUrl: './average-rate.component.html',
  styleUrls: ['./average-rate.component.css']
})
export class AverageRateComponent {
  averageForm: FormGroup;
  averageRate: number | null = null;

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.averageForm = this.fb.group({
      dataMin: ['', Validators.required],
      dataMax: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.averageForm.valid) {
      const { dataMin, dataMax } = this.averageForm.value;
      this.richiesteService.getAverageRateByDateRange(dataMin, dataMax).subscribe(
        (response: any) => {
          this.averageRate = response.averageRate;
        },
        (error) => {
          console.error('Errore durante il recupero del numero medio delle rate:', error);
        }
      );
    }
  }
}
