import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DateRangeRequestComponent } from './date-range-request.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('DateRangeRequestComponent', () => {
  let component: DateRangeRequestComponent;
  let fixture: ComponentFixture<DateRangeRequestComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangeRequestComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeRequestComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'getRequestsByDateRange').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch requests by date range on submit', () => {
    component.dateRangeForm.setValue({
      dataMin: '2023-01-01',
      dataMax: '2023-12-31',
      max: 10
    });
    component.onSubmit();
    expect(richiesteService.getRequestsByDateRange).toHaveBeenCalled();
  });
});
