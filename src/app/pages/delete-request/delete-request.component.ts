import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.css']
})
export class DeleteRequestComponent {
  deleteForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.deleteForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onDelete() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.deleteForm.valid) {
      const id = this.deleteForm.get('id')?.value;
      this.richiesteService.deleteRequest(id).subscribe(
        (response) => {
          this.successMessage = 'Richiesta eliminata con successo.';
        },
        (error) => {
          this.errorMessage = 'Errore durante l\'eliminazione della richiesta. Assicurati che l\'ID sia corretto.';
          console.error('Errore durante l\'eliminazione della richiesta:', error);
        }
      );
    }
  }
}
