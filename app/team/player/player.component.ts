import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models';

@Component({
	moduleId: module.id,
	selector: 'my-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent {
	@Input() player: Player;
}
