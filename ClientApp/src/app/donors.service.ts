
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from './models/Donor-model';


@Injectable()
export class DonorsService {
    constructor(private _http: HttpClient) { }
 
    saveDonor(DonorToSave: Donor): Observable<Boolean> {
        return this._http.post<Boolean>("api/Donors", DonorToSave);
    }
}