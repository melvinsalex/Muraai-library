import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCmpComponent } from './fav-cmp.component';

describe('FavCmpComponent', () => {
  let component: FavCmpComponent;
  let fixture: ComponentFixture<FavCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
