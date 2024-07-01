import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns = ["nome", "dataCadastro", "status"];

  @Input({ required: true }) dataSource: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected = (element: IUser) => {
    this.userSelectedEmitt.emit(element);
  }
}
