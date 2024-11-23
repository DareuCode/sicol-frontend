import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTypeComponent } from './general-type.component';

describe('GeneralTypeComponent', () => {
  let component: GeneralTypeComponent;
  let fixture: ComponentFixture<GeneralTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
