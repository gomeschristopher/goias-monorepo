import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonIdGoiasComponent } from './button-id-goias.component';

describe('ButtonIdGoiasComponent', () => {
  let component: ButtonIdGoiasComponent;
  let fixture: ComponentFixture<ButtonIdGoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIdGoiasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonIdGoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
