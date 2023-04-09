import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{
  currentFormat: string = "test";
  currentCategory: string = "batsmen";
  isWomen: string = "0";
  teamStats: any;
  bowlStats: any;
  allRStats: any;
  batStats: any;
  constructor(private rankingService: RankingService) {
    
  }

  ngOnInit(): void {
    this.getStats();
  }
  changeCategoryType(category: string){
    this.currentCategory = category;
    this.getStats();
  }

  changeFormatType(format: string){
    this.currentFormat = format;
    this.getStats();
  }

  getStats(){
    this.rankingService.getRanking(this.currentCategory, this.currentFormat, this.isWomen).subscribe((data)=>{
      switch(this.currentCategory){
        case 'batsmen':
          this.batStats = data.rank;
          break;
        case 'bowlers':
          this.bowlStats = data.rank;
          break;
        case 'allrounders':
          this.allRStats = data.rank;
          break;
        case 'teams':
          this.teamStats = data.rank;
          break;
      }
    })
  }
}
