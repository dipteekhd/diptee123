import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserList } from 'src/app/models/userList.model';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss'],
})
export class UserListsComponent implements OnInit {
  @Input() listData: MatTableDataSource<UserList>;
  @Input() displayedListColumns;
  @Output() selectedDetails = new EventEmitter<UserList>();
  selectedList: UserList;

  constructor() {}

  ngOnInit(): void {}

  showDetails(list: UserList) {
    this.selectedList = list;
    this.selectedDetails.emit(list);
  }
}
