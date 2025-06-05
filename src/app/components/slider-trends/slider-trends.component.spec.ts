import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTrendsComponent } from './slider-trends.component';

describe('SliderTrendsComponent', () => {
  let component: SliderTrendsComponent;
  let fixture: ComponentFixture<SliderTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
