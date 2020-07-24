import { Injectable } from '@angular/core';
import { UserList } from '../models/userList.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor() { }

  getAllLists() {
    const response: UserList[] = [
      {
        createdDate: 'Nov  1',
        name: 'Empty List',
        details: [],
      },
      {
        createdDate: 'Nov  2',
        name: 'Empty List 2',
        details: [],
      },
      {
        createdDate: 'Aug 1',
        name: 'Books',
        details: [
          'The Magic of Thinking Big by David J. Schwartz',
          'Unlimited Power by Anthony Robbins',
          'You can Heal Your Life by Louise L. Hay',
          'The 7 Habits of Highly Effective People by Stephen R. Covey',
        ],
      },
      {
        createdDate: 'Jun 5',
        name: 'Corona Prevention',
        details: [
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
          'Wash your hands regularly',
          'Maintain at least 1 metre distance',
          'Avoid touching your face',
          'Stay home if you feel unwell',
        ],
      },
      {
        createdDate: 'Jan 8',
        name: 'Angular',
        details: ['Javascript', 'TypeScript', 'CSS', 'HTML'],
      },
      {
        createdDate: 'Sep 1',
        name: 'Vendors',
        details: ['World of books', 'E-commerce'],
      },
      {
        createdDate: 'Oct 9',
        name: 'Angular Material',
        details: ['Table', 'Sidenav bar', 'Toolbar', 'Mat Buttons'],
      },
      {
        createdDate: 'Jun 15',
        name: 'Numbers',
        details: ['One-1', 'Two-2', 'Three-3'],
      },
      {
        createdDate: 'Jun 1',
        name: 'Inspirational Books',
        details: [
          'Biography of Dr. APJ Abdul Kalam Narrated By Gulzar Saab',
          'Look at Yourself by Nick Vujicic',
        ],
      },
      {
        createdDate: 'Jun 20',
        name: 'World health oraganization stay safe and updated',
        details: ['Positive cases', 'Negative cases', 'Recovery'],
      },
      {
        createdDate: 'Jun 15',
        name: 'Letters',
        details: ['A-a', 'B-b', 'C-c'],
      },
      {
        createdDate: 'Aug 5',
        name: 'List AB',
        details: ['AAAAA', 'BBBBB'],
      },
      {
        createdDate: 'Aug 15',
        name: 'List CD',
        details: ['CCCC', 'DDDD'],
      },
      {
        createdDate: 'Sep 15',
        name: 'List EF',
        details: ['EEEEE', 'FFFFF'],
      },
    ];
    return of(response);
  }
}
