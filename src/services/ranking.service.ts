import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  baseUrl = environment.baseUrl;
  xRapidKey = environment.XRapidKey;
  xRapidHost = environment.XRapidAPIHost;
  getRankingPath = "/stats/get-icc-rankings";
  constructor(private http: HttpClient) { 

  }

  getRanking(category: string, formatType: string, isWomen: string): Observable<any>{
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.xRapidKey)
      .set('X-RapidAPI-Host', this.xRapidHost);
    let path = this.baseUrl + this.getRankingPath + "?category=" + category + "&formatType=" + formatType + "&isWomen=" + isWomen;
    return this.http.get(path, { headers });
  }
}
