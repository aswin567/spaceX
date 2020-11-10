import { Component, Input } from '@angular/core';
import {SpaceX} from './space-x';

@Component({
  selector: 'app-space-x-details',
  templateUrl: './space-x-details.component.html',
  styleUrls: ['./space-x-details.component.scss']
})
export class SpaceXDetailsComponent {
  @Input() spaceXList: Array<SpaceX>;
  constructor() { }

}
