import { Component, Output, EventEmitter } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  dataSource = UsersList;
  displayedColumns = ["nome", "dataCadastro", "status"];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected = (element: IUser) => {
    this.userSelectedEmitt.emit(element);
  }
}
