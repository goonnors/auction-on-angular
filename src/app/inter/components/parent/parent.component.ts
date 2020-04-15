import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {ChildApiComponent} from '../child-api/child-api.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ChildApiComponent;
  todaysDate: string = new Date().toLocaleDateString();
  parentProperty = 'value';

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.firstChild.greet('Child 1'); });
  }

}
