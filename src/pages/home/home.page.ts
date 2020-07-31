import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select } from '@redux-multipurpose/core';

import { WsActions, testDataArray } from '../../store';

import { ExampleDTO } from '../../entities/dto/exampleDTO';
import { TestDataDTO } from '../../entities/dto/testDataDTO';

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


  @select(testDataArray)
  testData$: Observable<TestDataDTO[]>;

  @select(["ws", "testData", "loading"])
  testDataLoading$: Observable<boolean>;

  @select(["ws", "testData", "error"])
  testDataError$: Observable<any>;

  constructor(private wsActions: WsActions) {}

  ngOnInit()
  {
    this.wsActions.getExampleData();
  }

  getTests()
  {
    this.wsActions.getTestData();
  }
}
