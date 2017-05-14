import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fixture } from '../models';

@Component({
  selector: 'my-fixture',
  templateUrl: './fixture/fixture.component.html',
  styleUrls: ['./fixture/fixture.component.css']
})
export class FixtureComponent {
  @Input() fixture: Fixture;
  @Output() teamTap: EventEmitter<number> = new EventEmitter<number>();

  public displayScore(): boolean {
    return this.fixture.status === 'FINISHED'
        || this.fixture.status === 'IN_PLAY';
  }

  public inPlay(): boolean {
    return this.fixture.status === 'IN_PLAY';
  }

  homeTeamTap() {
    console.log('::FixtureComponent::homeTeamTap::' + this.fixture.homeTeamId);
    this.teamTap.emit(this.fixture.homeTeamId);
  }

  awayTeamTap() {
    console.log('::FixtureComponent::awayTeamTap::' + this.fixture.awayTeamId);
    this.teamTap.emit(this.fixture.awayTeamId);
  }
}
