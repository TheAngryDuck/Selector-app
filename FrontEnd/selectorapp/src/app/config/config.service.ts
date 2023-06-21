import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userDto } from '../userDto';
import { selectorDto } from '../selectorDto';
import { selectorListDto } from '../selectorListDto';

const reqHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')

@Injectable()
export class ConfigService {
  configUrl = 'http://localhost:8080/selectors';

  constructor(private http: HttpClient) { }

  getSelectors() {
    return this.http.get<selectorListDto>(this.configUrl);
  }

  addUser(dto: userDto){
    
    return this.http.post<userDto>(this.configUrl+"/users", dto,{headers: reqHeaders});
  }

  updateUser(dto: userDto){
    return this.http.put<userDto>(this.configUrl+"/users/"+dto.id, dto,{headers: reqHeaders});
  }
}


