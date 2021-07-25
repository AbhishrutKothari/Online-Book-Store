import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  users: Array<Users> = [];
  constructor(public us: UsersService) { }

  ngOnInit(): void {
  }
  loadData() {
    this.us.getAllUsers().subscribe(result => this.users = result,
      error => console.log(error))


  }

}
