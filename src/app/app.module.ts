import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { SearchRequestComponent } from './pages/search-request/search-request.component';
import { UpdateRequestComponent } from './pages/update-request/update-request.component';
import { DeleteRequestComponent } from './pages/delete-request/delete-request.component';
import { DateRangeRequestComponent } from './pages/date-range-request/date-range-request.component';
import { SumImportoComponent } from './pages/sum-importo/sum-importo.component';
import { AverageRateComponent } from './pages/average-rate/average-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewRequestComponent,
    SearchRequestComponent,
    UpdateRequestComponent,
    DeleteRequestComponent,
    DateRangeRequestComponent,
    SumImportoComponent,
    AverageRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
