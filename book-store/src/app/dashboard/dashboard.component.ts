import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Array<Users>=[];
  constructor(public bs: BooksService, public us: UsersService) { }

  ngOnInit(): void {
  }

  books() {
    this.bs.getAllBooks().subscribe(res => console.log(res), err => console.log(err))
  }

  users() {
    this.us.getAllUsers().subscribe(res => {console.log(res)}, err => console.log(err))
  }
}
