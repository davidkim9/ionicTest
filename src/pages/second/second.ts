import {
  Component,
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/core';

import { NavController } from 'ionic-angular';
import { ThirdPage } from '../third/third';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
  animations: [
    trigger('topBarState', [
      state('hidden', style({
        width: '15%',
        height: '6px',
      })),
      state('visible', style({
        height: '100px',
        width: '100%',
      })),
      transition('visible => hidden', animate('200ms')),
      transition('hidden => visible', animate('200ms'))
    ]),
    trigger('topBarContentState', [
      state('hidden', style({
        opacity: '0',
      })),
      state('visible', style({
        opacity: '1',
      })),
      transition('visible => hidden', animate('400ms')),
      transition('hidden => visible', animate('400ms'))
    ]),
  ]
})
export class SecondPage {
  topbarVisible: boolean = false;
  firstPage: boolean = true;
  constructor(public navCtrl: NavController) {
    
  }
  swipe(event){
    console.log("swipe", event);
  }

  pan(event){
    console.log("pan", event);
    this.topbarVisible = !this.topbarVisible;
    console.log(this.topbarVisible);
  }

  nextPage(event){
    this.navCtrl.push(ThirdPage);
  }
}
