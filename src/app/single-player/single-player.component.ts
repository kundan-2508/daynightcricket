import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/services/players.service';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit{
  id!: string;
  playerInfo: any;
  battingSummary: any;
  bowlingSummary: any;
  isLoader: boolean = false;
  constructor(private route: ActivatedRoute,
    private playersService: PlayersService) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPlayerInfo();
      this.getPlayerBattingStats(); // TO-DO : call both api in a single
      this.getPlayerBowlingStats();
    });
  }
  getPlayerInfo(){
    this.playersService.getPlayerInfoById(this.id).subscribe((data) =>{
      this.playerInfo = data;
    });
  }

  getPlayerBattingStats(){
    this.playersService.getPlayerBattingInfoById(+this.id).subscribe((data) =>{
      this.battingSummary = data;
    });
  }

  getPlayerBowlingStats(){
    this.playersService.getPlayerBowlingInfoById(+this.id).subscribe((data) =>{
      this.bowlingSummary = data;
    });
  }

}
