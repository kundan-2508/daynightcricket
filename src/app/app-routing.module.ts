import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: SinglePlayerComponent },
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
