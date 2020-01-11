import { Routes } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  signup(form: NgForm) {
    // console.log(form.value);
    let email = form.value.email;
    let password = form.value.password;
    let username = form.value.username;
    let phonenumber = form.value.phonenumber;
    let location = form.value.location;
    // console.log(email + password);
    //we need this information to store into firebase database
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification(); //helps to send emails
        console.log(userData);

        let message = `${email} Notification has been sent to your email address please verify..`;
        this.toastr.success(message);
        this.router.navigate(["/"]);
        return firebase
          .database()
          .ref("/user" + userData.user.uid)
          .set({
            username,
            email,
            password,
            phonenumber,
            location,
            uid: userData.user.uid,
            registrationDate: new Date().toString()
          });
      })
      .catch(err => {
        this.toastr.error(err.message);
        console.log(err);
      });
  }

  ngOnInit() {}
}
