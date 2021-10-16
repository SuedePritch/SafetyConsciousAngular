import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlhaComponent } from './flha.component';

describe('FlhaComponent', () => {
  let component: FlhaComponent;
  let fixture: ComponentFixture<FlhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
