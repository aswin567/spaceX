import { Component, Input, OnInit } from '@angular/core';
import { Rocket, SpaceX, Stage, Cores } from '../space-x';

@Component({
  selector: 'app-space-x-details-item',
  templateUrl: './space-x-details-item.component.html',
  styleUrls: ['./space-x-details-item.component.scss']
})
export class SpaceXDetailsItemComponent implements OnInit {
  landingSucess: boolean;
  @Input() set spaceXItem(spaceX: SpaceX){
    this.spaceXItemPrivate = spaceX;
    this.landingSucess = this.isLandingSucessfull(this.spaceXItemPrivate.rocket);

  }
  get spaceXItem(): SpaceX {
    return this.spaceXItemPrivate;
  }

  private spaceXItemPrivate: SpaceX;
  constructor() { }

  ngOnInit(): void {
  }

  isLandingSucessfull(rocket: Rocket): boolean{
    const firstStageSucessfull = this.isSatgeSucessfull(rocket.first_stage);
     return firstStageSucessfull;
  }

  isSatgeSucessfull(stage: Stage): boolean{
    return stage.cores.every((value: Cores) => value.land_success);
  }
}
