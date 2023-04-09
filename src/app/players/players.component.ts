import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/services/players.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  searchKeyword: string = "";
  playerList: Player[] = [];
  isLoading: boolean = false;
  constructor(private playersService: PlayersService) {
    
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.playersService.getTrendingPlayers().subscribe(data => {
      this.playerList = data.player;
      this.isLoading = false;
    });
  }
  searchPlayers(){
    this.isLoading = true;
    this.playersService.getPlayersByKeyword(this.searchKeyword).subscribe(data => {
      this.playerList = data.player;
      this.isLoading = false;
    });
  }
}
