import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  img = '../../assets/chat/chat2.jpg';
  constructor(public modalController: ModalController, public route: Router) {}

  async onSetting() {
    return this.route.navigateByUrl('/setting');
  }

  async onPicture() {
    return this.route.navigateByUrl('/picture');
  }

  async onEdit() {
   return this.route.navigateByUrl('/edit');

  }

}
