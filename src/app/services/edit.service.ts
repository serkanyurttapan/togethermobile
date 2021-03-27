import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";
import { Base } from "../interfaces/base-response";
import { EditAccountDto } from "../model/editaccount";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root",
})
export class EditService {
  constructor(private http: HttpClient, private aut: AuthenticationService) {}

  async editUserProfile(editAccountDto:EditAccountDto):Promise<Observable<Base.BaseResponse<EditAccountDto>>> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("responseType", "text")
      .set("Authorization", "Bearer " + this.aut.currentUserValue.token);
    return this.http
      .post<any>(`${environment.url.api}user/editAccountSave`,
        editAccountDto,{headers: headers}
      )
      .pipe(
        map((edit) => {
          return edit;
        })
      );
  }
}
