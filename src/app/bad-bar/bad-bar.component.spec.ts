import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadBarComponent } from './bad-bar.component';

describe('BadBarComponent', () => {
  let component: BadBarComponent;
  let fixture: ComponentFixture<BadBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
