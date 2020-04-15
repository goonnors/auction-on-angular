import { Component, OnInit } from '@angular/core';
import {debounceTime, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {StateService} from '../../state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [StateService]
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl('');

  constructor(private state: StateService) {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        tap(value => {
          console.log('The user entered ' + value);
        })
      )
      .subscribe(searchValue => {
        this.state.searchCriteria = searchValue;
      });
  }

  ngOnInit(): void {
  }

}
