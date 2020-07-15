import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjekcijaComponent } from './update-projekcija.component';

describe('UpdateProjekcijaComponent', () => {
  let component: UpdateProjekcijaComponent;
  let fixture: ComponentFixture<UpdateProjekcijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjekcijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjekcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
