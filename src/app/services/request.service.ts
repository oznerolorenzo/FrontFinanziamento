import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RichiesteService {
  private baseUrl = `${environment.HOST_DOMAIN}/api/requests`;

  constructor(private http: HttpClient) {}

  getAll(max: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista?max=${max}`);
  }

  createRequest(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  searchRequest(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cerca?search=${search}`);
  }

  updateRequest(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, data);
  }

  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getRequestsByDateRange(dataMin: string, dataMax: string, max: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/daterange`, { dataMin, dataMax, max });
  }

  getSumImportoByDateRange(dataMin: string, dataMax: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/sum-importo`, { dataMin, dataMax });
  }

  getAverageRateByDateRange(dataMin: string, dataMax: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/average-rate`, { dataMin, dataMax });
  }
}
