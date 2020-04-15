import {Component, AfterViewInit, ViewChild, QueryList, ViewChildren} from '@angular/core';
import {ChildApiComponent} from '../child-api/child-api.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ChildApiComponent;

  @ViewChildren(ChildApiComponent)
  allChildren: QueryList<ChildApiComponent>;

  todaysDate: string = new Date().toLocaleDateString();

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.firstChild.greet('Child 1'); });
  }

  greetAllChildren() {
    this.allChildren.forEach(child => child.greet(child.name));
  }

}
