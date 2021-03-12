import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractoresSliderComponent } from './instractores-slider.component';

describe('InstractoresSliderComponent', () => {
  let component: InstractoresSliderComponent;
  let fixture: ComponentFixture<InstractoresSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstractoresSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstractoresSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
