import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCmpComponent } from './genre-cmp.component';

describe('GenreCmpComponent', () => {
  let component: GenreCmpComponent;
  let fixture: ComponentFixture<GenreCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
