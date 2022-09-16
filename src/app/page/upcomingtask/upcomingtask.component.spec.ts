import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingtaskComponent } from './upcomingtask.component';

describe('UpcomingtaskComponent', () => {
  let component: UpcomingtaskComponent;
  let fixture: ComponentFixture<UpcomingtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
