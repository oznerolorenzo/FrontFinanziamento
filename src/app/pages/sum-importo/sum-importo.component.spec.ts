import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SumImportoComponent } from './sum-importo.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('SumImportoComponent', () => {
  let component: SumImportoComponent;
  let fixture: ComponentFixture<SumImportoComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumImportoComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumImportoComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'getSumImportoByDateRange').and.returnValue(of({ totalSum: 1000 }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch total sum on submit', () => {
    component.sumForm.setValue({
      dataMin: '2023-01-01',
      dataMax: '2023-12-31'
    });
    component.onSubmit();
    expect(richiesteService.getSumImportoByDateRange).toHaveBeenCalled();
    expect(component.totalSum).toBe(1000);
  });
});
