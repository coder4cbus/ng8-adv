import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolToolsLibComponent } from './cool-tools-lib.component';

describe('CoolToolsLibComponent', () => {
  let component: CoolToolsLibComponent;
  let fixture: ComponentFixture<CoolToolsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolToolsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolToolsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
