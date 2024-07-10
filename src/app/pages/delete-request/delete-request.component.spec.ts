import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteRequestComponent } from './delete-request.component';
import { RichiesteService } from '../../services/request.service';
import { of } from 'rxjs';

describe('DeleteRequestComponent', () => {
  let component: DeleteRequestComponent;
  let fixture: ComponentFixture<DeleteRequestComponent>;
  let richiesteService: RichiesteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRequestComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ RichiesteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRequestComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService);
    spyOn(richiesteService, 'deleteRequest').and.returnValue(of({}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete request on submit', () => {
    component.deleteForm.setValue({ id: 1 });
    component.onDelete();
    expect(richiesteService.deleteRequest).toHaveBeenCalledWith(1);
  });
});
