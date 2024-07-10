import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AverageRateComponent } from './average-rate.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('AverageRateComponent', () => {
  let component: AverageRateComponent;
  let fixture: ComponentFixture<AverageRateComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageRateComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageRateComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'getAverageRateByDateRange').and.returnValue(of({ averageRate: 24 }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch average rate on submit', () => {
    component.averageForm.setValue({
      dataMin: '2023-01-01',
      dataMax: '2023-12-31'
    });
    component.onSubmit();
    expect(richiesteService.getAverageRateByDateRange).toHaveBeenCalled();
    expect(component.averageRate).toBe(24);
  });
});
