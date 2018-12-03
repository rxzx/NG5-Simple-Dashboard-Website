import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFourComponent } from './tab-four.component';

describe('TabFourComponent', () => {
  let component: TabFourComponent;
  let fixture: ComponentFixture<TabFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
