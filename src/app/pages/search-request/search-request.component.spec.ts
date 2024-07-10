import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchRequestComponent } from './search-request.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('SearchRequestComponent', () => {
  let component: SearchRequestComponent;
  let fixture: ComponentFixture<SearchRequestComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRequestComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRequestComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'searchRequest').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search requests on submit', () => {
    component.searchForm.setValue({ search: 'Test' });
    component.onSubmit();
    expect(richiesteService.searchRequest).toHaveBeenCalledWith('Test');
  });
});
