import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
  private stateEvent: BehaviorSubject<string> = new BehaviorSubject('');

  set searchCriteria(value: string) {
    this.stateEvent.next(value);
    console.log(`StateService BehaviorSubject emitting ${value}`);
  }

  getState(): Observable<string> {
    return this.stateEvent.asObservable();
  }
}
