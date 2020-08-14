import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { select } from '@redux-multipurpose/core';

import { 
  testDataArray, 
  storedExamplesMap,
  WsActions, 
  StorageActions
} from '../../store';

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

  @select(["storage", "favouriteExamples"])
  exampleFavouritesArray$: Observable<ExampleDTO[]>;

  @select(storedExamplesMap)
  exampleFavouritesMap$: Observable<{[id: number]: ExampleDTO}>;


  @select(testDataArray)
  testData$: Observable<TestDataDTO[]>;

  @select(["ws", "testData", "loading"])
  testDataLoading$: Observable<boolean>;

  @select(["ws", "testData", "error"])
  testDataError$: Observable<any>;

  constructor(private wsActions: WsActions, private storage: StorageActions) {}

  ngOnInit()
  {
    this.wsActions.getExampleData();
  }

  getTests()
  {
    this.wsActions.getTestData();
  }

  isExampleFavourite(id: number): Observable<boolean>
  {
    return this.exampleFavouritesMap$.pipe(map(map => map != null && map != undefined && map[id] != null && map[id] != undefined));
  }

  triggerExampleFavourite(event, example: ExampleDTO)
  {
    event.stopPropagation();
    this.isExampleFavourite(example.id).pipe(first())
      .subscribe(isFavourite => {
        if (isFavourite)
          this.storage.removeExampleFavourite(example.id);
        else
          this.storage.addExampleFavourite(example);
      });
  }
}
