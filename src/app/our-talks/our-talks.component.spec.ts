import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTalksComponent } from './our-talks.component';

describe('OurTalksComponent', () => {
  let component: OurTalksComponent;
  let fixture: ComponentFixture<OurTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
