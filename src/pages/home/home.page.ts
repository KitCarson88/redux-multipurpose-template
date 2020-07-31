import { Component, OnInit } from '@angular/core';

import { select } from '@redux-multipurpose/core';

import { WsActions } from '../../store';
import { Observable } from 'rxjs';
import { ExampleDTO } from '../../entities/dto/exampleDTO';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{
  @select(["ws", "example", "data"])
  examples$: Observable<ExampleDTO[]>;

  @select(["ws", "example", "loading"])
  examplesLoading$: Observable<boolean>;

  @select(["ws", "example", "error"])
  examplesError$: Observable<any>;

  constructor(private wsActions: WsActions) {}

  ngOnInit()
  {
    this.wsActions.getExampleData();
  }
}
