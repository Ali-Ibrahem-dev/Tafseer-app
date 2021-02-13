import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  url = `https://price-compare-app.herokuapp.com/tafseer/admin`;

  // tslint:disable-next-line:max-line-length
  getSearchedDreams = (body: any): Observable<any> => this.http.post<any>(`${this.url}/searchdreamswithoutpaging`, body);
  getDreamInfoById = (id: number): Observable<any> => this.http.get<any>(`${this.url}/loaddreamdetail/${id}`);
  getDreamStatus = (): Observable<any> => this.http.get<any>(`${this.url}/loaddreamstatus`);
  getPaymentTypes = (): Observable<any> => this.http.get<any>(`${this.url}/loadpaymenttypes`);
  replyOnDream = (body: any): Observable<any> => this.http.post<any>(`${this.url}/adddreamreply`, body);


  constructor(private http: HttpClient) { }
}
