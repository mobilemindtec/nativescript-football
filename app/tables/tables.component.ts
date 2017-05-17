import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Competition, LeagueTable } from '../models';
import { CodePush, SyncStatus } from 'nativescript-code-push';
import { isIOS } from 'platform';

@Component({
  selector: 'my-tables',
  templateUrl: './tables/tables.component.html'
})
export class TablesComponent implements OnInit {
  public competitions: Competition[] = [];

  public PremierLeagueId: number = 426;
  public PrimeraDivisionId: number = 436;
  public BundesligaId: number = 430;
  public SerieAId: number = 438;
  public Ligue1Id: number = 434;
  public EredivisieId: number = 433;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.sync();
  }

  sync() {
    const key = (isIOS) ? 'uLCcf09jhc20q9XZkgnSRHVhymsjVJtBKN2Jm' : 
      '7ALm0ML8LI2NKhqmJ7qZqQWyV1uzVJtBKN2Jm';

    CodePush.sync({deploymentKey: key},
      (syncStatus: SyncStatus) => {
        // alert(syncStatus);
        if(syncStatus === SyncStatus.UPDATE_INSTALLED) {
          alert('Please restart your application');
        }
      }
    
    )
  }

  private onTeamTap(teamId: number) {
    console.log('::TablesComponent::onTeamTap::' + teamId);
  }
}
