import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined || name === '';

    if (NAME_NOT_TYPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATE_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => {
        const date = new Date(user.dataCadastro);
        // Setando a hora para 00:00:00:00, para comparar apenas a data
        date.setHours(0, 0, 0, 0);
        return date >= startDate && date <= endDate;
    });

    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);

    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

    return filteredList;
}

export { filterUsersList };