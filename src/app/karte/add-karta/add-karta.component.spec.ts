import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKartaComponent } from './add-karta.component';

describe('AddKartaComponent', () => {
  let component: AddKartaComponent;
  let fixture: ComponentFixture<AddKartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
