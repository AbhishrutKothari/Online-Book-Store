import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search-book-by-id',
  templateUrl: './search-book-by-id.component.html',
  styleUrls: ['./search-book-by-id.component.css']
})
export class SearchBookByIdComponent implements OnInit {
  searchedKeyword: string="";
  books:Array<Books> = [];
  
  constructor(public bs: BooksService) { }

  ngOnInit(): void {
  }
  loadData() {
    this.bs.getAllBooks().subscribe(result => this.books = result,
      error => console.log(error))


  }

}
