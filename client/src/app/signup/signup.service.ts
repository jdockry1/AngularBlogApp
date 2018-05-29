import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { User } from "../models/user.model"

@Injectable()
export class SignupService {

    constructor (private http: HttpClient) {

    }

    signUp(user: User) {
        return this.http.post("/api/user/signup", {
            name: user.name,
            username: user.username,
            password: user.password
        })
    }
}