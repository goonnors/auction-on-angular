import { Component, OnDestroy } from '@angular/core';
import {StateService} from '../../state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.scss'],
  providers: [StateService]
})
export class AmazonComponent implements OnDestroy {
  searchFor: string;
  subscription: Subscription;

  constructor(private state: StateService) {
    this.subscription = state.getState().subscribe(event => {
      this.searchFor = event;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
