import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // 實際呼叫登入 API
    localStorage.setItem('apiKey', 'xxxxxxxxxx');
    this.router.navigateByUrl('/');
  }

}
