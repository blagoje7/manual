import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjekcijaComponent } from './add-projekcija.component';

describe('AddProjekcijaComponent', () => {
  let component: AddProjekcijaComponent;
  let fixture: ComponentFixture<AddProjekcijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjekcijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjekcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
