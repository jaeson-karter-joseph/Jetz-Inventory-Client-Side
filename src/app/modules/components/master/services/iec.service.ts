import { Injectable } from '@angular/core';
import { IecEndpointService } from './iec-endpoint.service';
import { IecMaster } from '../models/iecModel';
import { Observable, map } from 'rxjs';
import { ApiResponse } from 'src/app/services/response';

@Injectable()
export class IecService {

  constructor(private iecEndpointService: IecEndpointService) { }

  newIecData(iecData: IecMaster): Observable<ApiResponse<IecMaster>> {
    return this.iecEndpointService.saveNewIecEndPoint(iecData).pipe<ApiResponse<IecMaster>>(map(res => {
      return res;
    }));
  }
}
