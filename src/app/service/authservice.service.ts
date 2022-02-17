import { Injectable } from '@angular/core';
import { ApiDataSource } from '../model/api.datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataSource: ApiDataSource) { }

  
}
