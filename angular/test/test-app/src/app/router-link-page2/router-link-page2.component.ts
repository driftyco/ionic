import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-router-link-page2',
  templateUrl: './router-link-page2.component.html'
})
export class RouterLinkPage2Component implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  pop(deep) {
    this.navCtrl.pop(deep);
  }

}
