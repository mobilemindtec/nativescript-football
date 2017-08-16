import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Fixture, Team } from '../../models';
import { FootballService } from '../../football.service';

@Component({
	moduleId: module.id,
	selector: 'app-competition-fixtures',
	templateUrl: './competition-fixtures.component.html'
})
export class CompetitionFixturesComponent implements OnInit {
  public fixtures: Fixture[] = [];
  public competitionName: string = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const competitionId = +this.route.snapshot.params['competitionId'];
    this.competitionName = this.route.snapshot.params['competitionName'];

    this.loadData(competitionId)
      .then(fixtures => this.fixtures = fixtures);
  }

  async loadData(competitionId: number) {
    let before = await this.footballService.getFixtures(competitionId, { timeFrame: 'p14'});
    let after = await this.footballService.getFixtures(competitionId, { timeFrame: 'n14'});

    return before.concat(after);
  }

  teamSelected(teamId: number) {
    console.log('::CompetitionFixturesComponent::teamSelected::' + teamId);
    this.router.navigate(['/team', teamId]);
  }
}
