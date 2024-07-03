import { Component, Output, EventEmitter } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };
  
  statusOptions = [
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' },
    { value: undefined, viewValue: 'Todos' }
  ];

  @Output('onFilter') onFilterEmmit = new EventEmitter<IFilterOptions>();

  onClickButton() {
    this.onFilterEmmit.emit(this.filterOptions);
  }
}
