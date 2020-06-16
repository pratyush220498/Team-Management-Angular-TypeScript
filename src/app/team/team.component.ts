import { PlayersService } from './../players/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private playerService: PlayersService) { }
  players: any;
  ngOnInit(){
    this.players = this.playerService.team;
  }
}
