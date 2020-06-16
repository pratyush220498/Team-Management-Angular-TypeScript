import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';
import { Players } from '../players';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  title = 'Players';
  players: Players;
  error: {};
  name: string;
  store: any;

  constructor(private playerService: PlayersService, private titleService: Title) {}

  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.playerService.getPlayers().subscribe(
      (data: Players) => {this.players = data ; },
      error => this.error = error);
  }

  checkUser()
  {
    this.name = localStorage.getItem('ACCESS_TOKEN');
    if (this.name === 'Admin')
    {
      return true;
    }
    if ( this.name === 'Guest')
    {
      return false;
    }
  }

  show(id)
  {
    for (const player of JSON.parse(JSON.stringify(this.players)))
    {
      if ( id === player.playerId)
      {
        console.log(player.playerId + ' ' + player.playerName + ' ' + player.playerPosition);
        window.alert(' Player Id :- ' + player.playerId + '\n' +
        ' Player Name :- ' + player.playerName + '\n' +
        ' Player Position :- ' + player.playerPosition);
      }
    }
  }

  add(id)
  {
    for (const player of JSON.parse(JSON.stringify(this.players)))
    {
      if ( id === player.playerId)
      {
        const tempPlayer = this.playerService.team.find(x => x.playerId === id);
        if ( tempPlayer )
        {
           return;
        }
        else
        {
          this.playerService.team.push(player);
        }
      }
    }
  }


}
