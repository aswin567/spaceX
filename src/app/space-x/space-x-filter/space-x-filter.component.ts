import { Component, EventEmitter, Output } from '@angular/core';
import { SpaceXFilter } from './space-x-filter';

@Component({
  selector: 'app-space-x-filter',
  templateUrl: './space-x-filter.component.html',
  styleUrls: ['./space-x-filter.component.scss']
})
export class SpaceXFilterComponent {
  @Output() filterChanged: EventEmitter<SpaceXFilter> = new EventEmitter();
  selectedYear: number;
  isLaunch: boolean;
  isLand: boolean;
  spaceXFilter: SpaceXFilter = {};

  onSelectYear(year: number): void {
    this.spaceXFilter.launch_year = String(year);
    this.filterChanged.emit(this.spaceXFilter);
  }

  onSelectLaunch(fail: boolean): void {
    this.spaceXFilter.launch_success = String(fail);
    this.filterChanged.emit(this.spaceXFilter);

  }
  onSelectLand(fail: boolean): void {
    this.spaceXFilter.land_success = String(fail);
    this.filterChanged.emit(this.spaceXFilter);

  }
}
