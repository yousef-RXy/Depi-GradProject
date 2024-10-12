import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglProductComponent } from './singl-product.component';

describe('SinglProductComponent', () => {
  let component: SinglProductComponent;
  let fixture: ComponentFixture<SinglProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglProductComponent]
    });
    fixture = TestBed.createComponent(SinglProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
