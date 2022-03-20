import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalinfoListComponent } from './metalinfo-list.component';

describe('MetalinfoListComponent', () => {
  let component: MetalinfoListComponent;
  let fixture: ComponentFixture<MetalinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalinfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
