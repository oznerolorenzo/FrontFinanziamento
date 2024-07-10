import { Component, OnInit } from '@angular/core';
import { RichiesteService } from '../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requests: any[] = [];
  limit = 50;

  constructor(private richiesteService: RichiesteService) { }

  ngOnInit(): void {
    this.fetchRequests();
  }

  fetchRequests() {
    this.richiesteService.getAll(this.limit).subscribe(
      (data: any) => {
        this.requests = data.data || data; // Assicurati di ottenere i dati corretti
      },
      error => {
        console.error('Errore durante il recupero delle richieste:', error);
      }
    );
  }
}
