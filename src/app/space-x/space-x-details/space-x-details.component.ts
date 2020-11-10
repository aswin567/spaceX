import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-x-details',
  templateUrl: './space-x-details.component.html',
  styleUrls: ['./space-x-details.component.scss']
})
export class SpaceXDetailsComponent implements OnInit {
  @Input() spaceXList: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
