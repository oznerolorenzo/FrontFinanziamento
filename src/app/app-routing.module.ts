import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { SearchRequestComponent } from './pages/search-request/search-request.component';
import { UpdateRequestComponent } from './pages/update-request/update-request.component';
import { DeleteRequestComponent } from './pages/delete-request/delete-request.component';
import { DateRangeRequestComponent } from './pages/date-range-request/date-range-request.component';
import { SumImportoComponent } from './pages/sum-importo/sum-importo.component';
import { AverageRateComponent } from './pages/average-rate/average-rate.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: NewRequestComponent },
  { path: 'search', component: SearchRequestComponent },
  { path: 'update', component: UpdateRequestComponent },
  { path: 'delete', component: DeleteRequestComponent },
  { path: 'daterange', component: DateRangeRequestComponent },
  { path: 'sum-importo', component: SumImportoComponent },
  { path: 'average-rate', component: AverageRateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
