import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalinfoComponent } from './metalinfo.component';

describe('MetalinfoComponent', () => {
  let component: MetalinfoComponent;
  let fixture: ComponentFixture<MetalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
