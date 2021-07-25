import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {
  books: Array<Books> = [];
  constructor(public bs: BooksService) { }

  ngOnInit(): void {
  }
  loadData() {
   this.bs.getAllBooks().subscribe(result => this.books = result,
    error => console.log(error))
    
     
  }

}
