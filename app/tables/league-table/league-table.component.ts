import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { LeagueTable, Team } from '../../models';
import { FootballService } from '../../football.service';

@Component({
	moduleId: module.id,
  selector: 'my-league-table',
  templateUrl: './league-table.component.html'
})
export class LeagueTableComponent implements OnInit {

  private id: number;
  @Input() public set competitionId(id: number) {
    this.id = id;
  }

  public table: LeagueTable;
  public teams: Team[];

  constructor(private footballService: FootballService) {
  }

  ngOnInit(): void {
    // this.loadTeamsAndTable();
  }

  /** 
   * Get both teams and table info. Teams contains short name for each team
   */
  private async loadTeamsAndTable() {
    this.teams = await this.footballService.getTeams(this.id);
    this.table = await this.footballService.getLeagueTable(this.id);
  }

  public getTeamName(teamId: number): string {
    const team = this.getTeam(teamId);

    return (team.shortName) ? team.shortName : team.name;
  }

  private getTeam(teamId: number): Team {
    return this.teams.filter(team => team.teamId === teamId)[0];
  }

  @Output() teamSelected: EventEmitter<number> = new EventEmitter<number>();
  onTeamSelect(event) {
    const selectedTeamId = this.table.standing[event.index].teamId;
    console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);
    this.teamSelected.emit(selectedTeamId);
  }
}
