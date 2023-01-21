import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faTwitter, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  facebook = faFacebook;
  google = faGoogle;
  twitter = faTwitter;
  github = faGithub;
  constructor(private authService: AuthService, private router: Router) { 
    if(localStorage.getItem('token')){
      router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
   });
  }

  submit(): void{
    console.log(this.form.value)
    this.authService.login(this.form.value).subscribe((response:any) => {
      console.log(response);
      console.log(response.body.data)
      let user = response.body.data;
      localStorage.setItem('username', user.email)
      localStorage.setItem('useremail', user.name)
      localStorage.setItem('token', response.headers.get('Authorization'))
      this.router.navigate(['/books']);
    });
  }

}
