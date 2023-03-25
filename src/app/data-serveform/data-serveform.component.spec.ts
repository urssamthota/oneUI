import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServeformComponent } from './data-serveform.component';

describe('DataServeformComponent', () => {
  let component: DataServeformComponent;
  let fixture: ComponentFixture<DataServeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
