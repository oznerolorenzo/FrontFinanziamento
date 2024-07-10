import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      cognomeNomeRichiedente: ['', Validators.required],
      importo: ['', [Validators.required, Validators.min(1)]],
      numeroRate: ['', [Validators.required, Validators.min(1)]],
      dataInserimentoRichiesta: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.updateForm.valid) {
      const id = this.updateForm.get('id')?.value;
      const updatedRequest = this.updateForm.value;
      updatedRequest.dataInserimentoRichiesta = new Date(updatedRequest.dataInserimentoRichiesta);
      this.richiesteService.updateRequest(id, updatedRequest).subscribe(response => {
          console.log('Richiesta aggiornata:', response);
          this.updateForm.reset();
        },
        error => {
          console.error('Errore durante l\'aggiornamento della richiesta:', error);
        });
    }
  }
}
