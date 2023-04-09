import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseUrl = environment.baseUrl;
  xRapidKey = environment.XRapidKey;
  xRapidHost = environment.XRapidAPIHost;
  trendingSearch = "/players/list-trending";
  searchByKeyword = "/players/search?plrN=";
  getPlayerInfo = "/players/get-info?playerId=";
  getPlayerBattingInfo = "/players/get-batting?playerId=";
  getPlayerBowlingInfo = "/players/get-bowling?playerId=";
  constructor(private http: HttpClient) { }
  
  getTrendingPlayers(): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost);
    return this.http.get(this.baseUrl + this.trendingSearch, { headers });
  }

  getPlayersByKeyword(keyword: string): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost);
    return this.http.get(this.baseUrl + this.searchByKeyword + keyword, { headers });
  }

  getPlayerInfoById(playerId: string): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost);
    return this.http.get(this.baseUrl + this.getPlayerInfo + playerId, { headers });
  }

  getPlayerBattingInfoById(playerId: number): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost)
    return this.http.get(this.baseUrl + this.getPlayerBattingInfo + playerId, { headers });
  }

  getPlayerBowlingInfoById(playerId: number): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost)
    return this.http.get(this.baseUrl + this.getPlayerBowlingInfo + playerId ,{ headers });
  }
}
