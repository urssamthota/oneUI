import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServeComponent } from './data-serve.component';

describe('DataServeComponent', () => {
  let component: DataServeComponent;
  let fixture: ComponentFixture<DataServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
