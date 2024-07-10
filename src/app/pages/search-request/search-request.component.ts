import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.css']
})
export class SearchRequestComponent {
  searchForm: FormGroup;
  results: any[] = [];

  constructor(
    private fb: FormBuilder,
    private richiesteService: RichiesteService
  ) {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.searchForm.valid) {
      const search = this.searchForm.get('search')?.value;
      this.richiesteService.searchRequest(search).subscribe(
        (data: any) => {
          this.results = data.data || data; // Assicurati di ottenere i dati corretti
        },
        (error) => {
          console.error('Errore durante la ricerca delle richieste:', error);
        }
      );
    }
  }
}
