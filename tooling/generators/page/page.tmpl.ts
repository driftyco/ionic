import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the <%= jsClassName %> page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/<%= directory %>/<%= fileName %>/<%= fileName %>.html',
})
export class <%= jsClassName %> {
  public nav;

  constructor(nav: NavController) {
    this.nav = nav;
  }
}
