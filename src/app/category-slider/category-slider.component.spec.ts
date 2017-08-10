import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySliderComponent } from './category-slider.component';

describe('CategorySliderComponent', () => {
  let component: CategorySliderComponent;
  let fixture: ComponentFixture<CategorySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});