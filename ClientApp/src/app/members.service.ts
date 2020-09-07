
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './models/member-model';
import { ConfirmationCode } from './models/confirmation-code-model';


@Injectable()
export class MembersService {
    constructor(private _http: HttpClient) { }
    

    getMembers(): Observable<Member[]> {
        return this._http.get<Member[]>("api/Members");

    }
    getMemberByEmailAndPassword( currentMember): Observable<Member> {   
        return this._http.post<Member>("api/Members/LogIn",currentMember);
    }

    saveMember(memberToSave: Member): Observable<Member> {
        return this._http.post<Member>("api/Members", memberToSave);

    }

    updateMember(member: Member): Observable<Boolean> {
        return this._http.put<Boolean>("api/Members/1", member);
    }

    sendPassword(email: string, source:number): Observable<ConfirmationCode>{
        return this._http.get<ConfirmationCode>("api/Members/GetPassword" + email + "/" + source);
    }
}
