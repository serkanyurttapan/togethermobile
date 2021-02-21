import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  photo1 = '../../assets/chat/chat2.jpg';
  photo2 = null;
  photo3 = null;
  constructor() { }

  ngOnInit() {
  }

}
