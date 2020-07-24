import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit {
  @Input() selectedListDetails: string[];

  constructor() {}

  ngOnInit(): void {}
}
