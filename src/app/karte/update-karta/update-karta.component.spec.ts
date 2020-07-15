import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKartaComponent } from './update-karta.component';

describe('UpdateKartaComponent', () => {
  let component: UpdateKartaComponent;
  let fixture: ComponentFixture<UpdateKartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
