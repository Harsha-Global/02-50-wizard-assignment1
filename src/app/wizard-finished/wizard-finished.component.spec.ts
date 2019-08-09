import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFinishedComponent } from './wizard-finished.component';

describe('WizardFinishedComponent', () => {
  let component: WizardFinishedComponent;
  let fixture: ComponentFixture<WizardFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
