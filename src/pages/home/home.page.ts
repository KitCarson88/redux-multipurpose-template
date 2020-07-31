import { Component, OnInit } from '@angular/core';

import { WsActions } from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{
  constructor(private wsActions: WsActions) {}

  ngOnInit()
  {
    this.wsActions.getExampleData();
  }
}
