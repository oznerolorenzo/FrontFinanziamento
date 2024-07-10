import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateRequestComponent } from './update-request.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('UpdateRequestComponent', () => {
  let component: UpdateRequestComponent;
  let fixture: ComponentFixture<UpdateRequestComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRequestComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequestComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'updateRequest').and.returnValue(of({}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update request on submit', () => {
    component.updateForm.setValue({
      id: 1,
      cognomeNomeRichiedente: 'Updated Name',
      importo: 200,
      numeroRate: 24,
      dataInserimentoRichiesta: '2023-01-01'
    });
    component.onSubmit();
    expect(richiesteService.updateRequest).toHaveBeenCalled();
  });
});
