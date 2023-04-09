import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SinglePlayerComponent } from './single-player/single-player.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: SinglePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
