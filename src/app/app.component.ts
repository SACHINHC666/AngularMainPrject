import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "swiggy";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyDON0jfj6dC7lWmTx6zVcnrLaU7llIoKNg",
      authDomain: "swiggy-ef0d9.firebaseapp.com",
      databaseURL: "https://swiggy-ef0d9.firebaseio.com",
      projectId: "swiggy-ef0d9",
      storageBucket: "swiggy-ef0d9.appspot.com",
      messagingSenderId: "744366137581",
      appId: "1:744366137581:web:ce646d544c1180c360ace4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
