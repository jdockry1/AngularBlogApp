import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../models/user.model"
import { AlertService } from "../alerts/alert.service"
import { SignupService } from "./signup.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"],
    providers: [SignupService]
})

export class SignupComponent {
    public user: User
    public pass: string;

    constructor (private router: Router, private alert: AlertService, private signupService: SignupService) {
        this.user = new User();
        this.pass = "";
    }

    signUp() {
        if(this.user.name && this.user.username && this.user.password) {
            if(this.user.password === this.pass) {
                this.signupService.signUp(this.user).subscribe(res => {
                    if (res['status'] === 'success') {
                        this.router.navigate(['/login'])
                    }
                    else if (res['status'] === 'conflict') {
                        this.alert.error("Already Exists!");
                    }
                })
            }
            else {
                this.alert.error("Passwords don't match!");
            }
        }
        else {
            this.alert.error("Fill in all details!");
        }
    }

    gotoLogin() {
        this.router.navigate(["login"]);
    }
}