import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iteam } from '../interfaces/Idata';
import { Api_Url } from '../constants/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ProfileCardService {


  constructor( private https:HttpClient) { }

  getTeam():Observable<Iteam[]>{

    return this.https.get<Iteam[]>(`${Api_Url.baseUrl}${Api_Url.endpoints.team}`)
  }
}
