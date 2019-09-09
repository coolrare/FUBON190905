import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: 'doggy.huang@gmail.com',
    password: '',
    rememberMe: true
  };

  form: FormGroup;

  @ViewChild(NgForm, { static: true }) f: NgForm;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      ids: this.fb.array([
        this.fb.group({
          username: ['doggy.huang@gmail.com',
            [Validators.required, Validators.email]
          ],
          password: ['123',
            [Validators.required, Validators.minLength(3)]
          ],
        }),
        this.fb.group({
          username: ['will.huang@miniasp.com',
            [Validators.required, Validators.email]
          ],
          password: ['123',
            [Validators.required, Validators.minLength(3)]
          ],
        })
      ]),
      rememberMe: true
    });
  }

  addNewLogin() {
    const arr = this.form.get('ids') as FormArray;
    arr.push(this.fb.group({
      username: ['',
        [Validators.required, Validators.email]
      ],
      password: ['',
        [Validators.required, Validators.minLength(3)]
      ],
    }));
  }

  onSubmit() {
    if (this.form.valid) {
      // TODO: Submit form by HttpClient
      // 實際呼叫登入 API
      localStorage.setItem('apiKey', 'xxxxxxxxxx');
      this.router.navigateByUrl('/');
    }
  }

}
