import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { selectorDto } from '../selectorDto';

@Injectable()
export class ConfigService {
  configUrl = 'http://localhost:8080/selectors';

  constructor(private http: HttpClient) { }

  getSelectors() {
    return this.http.get<selectorListDto>(this.configUrl);
  }
}

interface selectorListDto{

  results: selectorDto[]
 
}
