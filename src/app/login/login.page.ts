import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { CookieModule } from '../cookie/cookie.module';
import { AutGuardService } from '../core/aut.guard.service';
import { AuthService } from '../core/auth.service';
import { UserOptions } from '../interfaces/user-options';
import { User } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: UserOptions = { email: '', password: '' };
  result: User.AccessToken;
  userData: any = {};
  submitted = false;
  constructor(
    public navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private cookieModule: CookieModule,
    private router: Router,
    private authService:AuthService,
    private  authguard: AutGuardService,
    private alertCtrl: AlertController
  ) {
  }
  async onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      (
        await this.authenticationService.login({
          email: form.value['email'],
          password: form.value['password'],
        })
      )
        .pipe(
          catchError((err) => {
            this.submitted = false;
            throw err;
          })
        )
        .subscribe((res) => {
          if (res.success) {
            debugger
            this.cookieModule.write('token', res.extra.token);
            this.router.navigate(["/tabs"]);
            return

          }
          else {
            this.presentAlert(res.errorMessage);
            console.log(res.errorMessage)
          }
        });
    }
  }
  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Uyarı!',
      message: message,
      buttons: ['Tamam'],

    });

    await alert.present();
  }
 
}
