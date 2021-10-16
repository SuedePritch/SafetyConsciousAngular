import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhmisComponent } from './whmis.component';

describe('WhmisComponent', () => {
  let component: WhmisComponent;
  let fixture: ComponentFixture<WhmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
