import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;
  tab5Root: string;

  constructor() {
    this.tab1Root = 'SearchPage';
    this.tab2Root = 'WatchingPage';
    this.tab3Root = 'StarredPage';
    this.tab4Root = 'FollowingPage';
    this.tab5Root = 'MyGitHubPage';
  }

}
