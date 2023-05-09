import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningsComponent } from './meanings.component';

describe('MeaningsComponent', () => {
  let component: MeaningsComponent;
  let fixture: ComponentFixture<MeaningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeaningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
