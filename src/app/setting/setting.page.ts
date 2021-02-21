import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public pickerController: PickerController) { }

  ngOnInit() {
  }

// CHOOSE AGE MIN
async showPickerMin() {
    const options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
          }
        }
      ],
      columns: [{
        name: 'min',
        options: this.getColumnOptions()
      }]
    };
    const picker = await this.pickerController.create(options);
    picker.present();
}

// CHOOSE AGE MAX
async showPickerMax() {
  const options: PickerOptions = {
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Ok',
        handler: (value: any) => {
        }
      }
    ],
    columns: [{
      name: 'max',
      options: this.getColumnOptions()
    }]
  };
  const picker = await this.pickerController.create(options);
  picker.present();
 }

 // CHOOSE SEX
async showPickerSex() {
  const options: PickerOptions = {
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Ok',
        handler: (value: any) => {
        }
      }
    ],
    columns: [{
      name: 'Sex',
      options: [{text: 'Man', value: 'Woman'}, {text: 'Man', value: 'Woman'}]
    }]
  };
  const picker = await this.pickerController.create(options);
  picker.present();
 }

getColumnOptions() {
  // tslint:disable-next-line:prefer-const
  let options = [];
  for (let i = 18; i < 90; i++) {
    options.push({text: i, value: i });
  }
  return options;
}
}
