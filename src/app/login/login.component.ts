import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenWill } from '../shared/forbiddenWill';

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
          username: ['',
            [Validators.required, Validators.email, forbiddenWill]
          ],
          password: ['',
            [Validators.required, Validators.minLength(3)]
          ],
        }, {
          validators: []
        }),
        this.fb.group({
          username: ['',
            [Validators.required, Validators.email, forbiddenWill]
          ],
          password: ['',
            [Validators.required, Validators.minLength(3)]
          ],
        })
      ]),
      rememberMe: false
    });
  }

  addNewLogin() {
    const arr = this.form.get('ids') as FormArray;
    arr.push(this.fb.group({
      username: ['',
        [Validators.required, Validators.email, forbiddenWill]
      ],
      password: ['',
        [Validators.required, Validators.minLength(3)]
      ],
    }));
  }

  resetForm() {
    this.form.reset({
      ids: [
        {
          username: 'doggy.huang@gmail.com',
          password: '123'
        },
        {
          username: 'will.huang@miniasp.com',
          password: '123'
        }
      ],
      rememberMe: true
    });
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
