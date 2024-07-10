import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewRequestComponent } from './new-request.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('NewRequestComponent', () => {
  let component: NewRequestComponent;
  let fixture: ComponentFixture<NewRequestComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRequestComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequestComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'createRequest').and.returnValue(of({}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form if valid', () => {
    component.requestForm.setValue({
      cognomeNomeRichiedente: 'Test Name',
      importo: 100,
      numeroRate: 12,
      dataInserimentoRichiesta: '2023-01-01'
    });
    component.onSubmit();
    expect(richiesteService.createRequest).toHaveBeenCalled();
  });
});
