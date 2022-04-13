import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/Interfaces/User.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      console.log(res);

      const user = res.find((a: any) => {
        console.log(a);

        return (
          a.username === this.loginForm.value.username &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        alert('zalogowano');
        this.loginForm.reset();
        this.router.navigate(['dashboard/main']);
      } else {
        alert('zle dane');
      }
    });
  }
}
