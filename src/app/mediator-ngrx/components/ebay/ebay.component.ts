import {Component, OnDestroy} from '@angular/core';
import {StateService} from '../../state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.scss'],
  providers: [StateService]
})
export class EbayComponent implements OnDestroy {
  searchFor: string;
  subscription: Subscription;

  constructor(private state: StateService) {
    this.subscription = state.getState().subscribe(event => {
      this.searchFor = event;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
