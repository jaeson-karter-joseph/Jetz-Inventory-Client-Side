import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { EndpointBase } from 'src/app/services/endpoint-base.service';
import { IecMaster } from '../models/iecModel';
import { ApiResponse } from 'src/app/services/response';

@Injectable()
export class IecEndpointService extends EndpointBase {
  get newIECUrl() { return this.configurations.baseUrl + 'iec/saveiec'; }

  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

  saveNewIecEndPoint(user: IecMaster): Observable<ApiResponse<IecMaster>> {
    return this.http.post<ApiResponse<IecMaster>>(this.newIECUrl, JSON.stringify(user), this.requestHeaders).pipe(
      catchError(error => {
        return this.handleError(error, () => this.saveNewIecEndPoint(user));
      })
    )
  }
}
