import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootballService } from '../../football.service';
import { Team, Player } from '../../models';

@Component({
	moduleId: module.id,
	selector: 'app-team',
	templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  public team: Team;
  public players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService) {
  }

  ngOnInit() {
    const teamId = +this.route.snapshot.params['teamId'];

    this.footballService.getTeam(teamId)
      .then(team => this.team = team);

    this.footballService.getPlayers(teamId)
      .then(players => this.players = players);
  }
}
