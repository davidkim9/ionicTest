import {
  Component,
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/core';

import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
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
    // trigger('pageTransition', [
    //   state('hidden', style({
    //     top: '100%',
    //   })),
    //   state('visible', style({
    //     top: '0%',
    //   })),
    //   transition('visible => hidden', animate('400ms')),
    //   transition('hidden => visible', animate('400ms'))
    // ]),
  ]
})
export class HomePage {
  topbarVisible: boolean = false;
  pageActive: boolean = true;
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
    // this.pageActive = false;
    this.navCtrl.push(SecondPage);
  }
}
