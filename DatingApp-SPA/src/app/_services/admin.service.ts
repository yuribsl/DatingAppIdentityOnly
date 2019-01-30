import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  

  getUsersWithRoles(){
    var x = this.http.get(this.baseUrl + 'admin/userWithRoles');
    return x;
  }

  updateUserRoles(user:User, roles = {}){
    return this.http.post(this.baseUrl + "admin/editRoles/" + user.userName,roles);
  }
}
