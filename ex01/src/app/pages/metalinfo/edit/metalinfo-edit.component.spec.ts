import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalinfoEditComponent } from './metalinfo-edit.component';

describe('MetalinfoEditComponent', () => {
  let component: MetalinfoEditComponent;
  let fixture: ComponentFixture<MetalinfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalinfoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
