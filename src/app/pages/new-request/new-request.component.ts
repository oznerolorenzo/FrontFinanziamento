import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.requestForm = this.fb.group({
      cognomeNomeRichiedente: ['', Validators.required],
      importo: ['', [Validators.required, Validators.min(1)]],
      numeroRate: ['', [Validators.required, Validators.min(1)]],
      dataInserimentoRichiesta: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.requestForm.valid) {
      const newRequest = this.requestForm.value;
      newRequest.dataInserimentoRichiesta = new Date(newRequest.dataInserimentoRichiesta);
      this.richiesteService.createRequest(newRequest).subscribe(response => {
          console.log('Nuova richiesta aggiunta:', response);
          this.requestForm.reset();
        },
        error => {
          console.error('Errore durante l\'aggiunta della richiesta:', error);
        });
    }
  }
}
