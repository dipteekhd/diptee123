import { Component, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserList } from './models/userList.model';
import { UserListService } from './services/user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listColumns = ['createdDate', 'name', 'total', 'actions', 'details'];
  listDetails: string[];
  userLists: MatTableDataSource<UserList>;

  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.userListService.getAllLists().subscribe((lists) => {
      this.userLists = new MatTableDataSource(lists);

      // this is custom filter to search list by its name
      this.userLists.filterPredicate = (
        list: UserList,
        searchValue: string
      ) => {
        return list.name.toLowerCase().indexOf(searchValue) !== -1;
      };
    });
  }

  showListDetails(list: UserList) {
    this.listDetails = list.details;
  }

  searchList(event) {
    this.listDetails = [];
    const searchValue = (event.target as HTMLInputElement).value;
    this.userLists.filter = searchValue.trim().toLowerCase();
  }
}
