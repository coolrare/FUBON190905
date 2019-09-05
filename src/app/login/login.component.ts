import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(NgForm, { static: true }) form: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // 實際呼叫登入 API
    localStorage.setItem('apiKey', 'xxxxxxxxxx');
    this.router.navigateByUrl('/');
  }

}
