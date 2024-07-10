import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-sum-importo',
  templateUrl: './sum-importo.component.html',
  styleUrls: ['./sum-importo.component.css']
})
export class SumImportoComponent {
  sumForm: FormGroup;
  totalSum: number | null = null;

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.sumForm = this.fb.group({
      dataMin: ['', Validators.required],
      dataMax: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.sumForm.valid) {
      const { dataMin, dataMax } = this.sumForm.value;
      this.richiesteService.getSumImportoByDateRange(dataMin, dataMax).subscribe(
        (response: any) => {
          this.totalSum = response.totalSum;
        },
        (error) => {
          console.error('Errore durante il recupero della somma degli importi:', error);
        }
      );
    }
  }
}
