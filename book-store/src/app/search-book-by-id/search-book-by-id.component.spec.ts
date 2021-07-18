import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookByIdComponent } from './search-book-by-id.component';

describe('SearchBookByIdComponent', () => {
  let component: SearchBookByIdComponent;
  let fixture: ComponentFixture<SearchBookByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
