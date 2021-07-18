import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerByIdComponent } from './search-customer-by-id.component';

describe('SearchCustomerByIdComponent', () => {
  let component: SearchCustomerByIdComponent;
  let fixture: ComponentFixture<SearchCustomerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCustomerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
