import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { store, select } from '@redux-multipurpose/core';

import { 
  testDataArray, 
  storedExamplesMap,
  storedTestsMap,
  WsActions, 
  StorageActions,
  SecureStorageActions
} from '../../store';

import { ExampleDTO } from '../../entities/dto/exampleDTO';
import { TestDataDTO } from '../../entities/dto/testDataDTO';
import { NavController } from '@ionic/angular';

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

  @select(["ws", "testData", "data", "available"])
  testDataAvailable$: Observable<null | boolean>;

  @select(["ws", "testData", "loading"])
  testDataLoading$: Observable<boolean>;

  @select(["ws", "testData", "error"])
  testDataError$: Observable<any>;

  @select(["secureStorage", "infos", "favouriteTests"])
  testFavouritesArray$: Observable<TestDataDTO[]>;

  @select(storedTestsMap)
  testFavouritesMap$: Observable<{[id: number]: TestDataDTO}>;

  constructor(
    private navCtrl: NavController,
    private wsActions: WsActions,
    private storage: StorageActions,
    private secureStorage: SecureStorageActions
  ) {}

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

  isTestFavourite(id: number): Observable<boolean>
  {
    return this.testFavouritesMap$.pipe(map(map => map != null && map != undefined && map[id] != null && map[id] != undefined));
  }

  triggerTestFavourite(event, test: TestDataDTO)
  {
    event.stopPropagation();
    this.isTestFavourite(test.id).pipe(first())
      .subscribe(isFavourite => {
        if (isFavourite)
          this.secureStorage.removeTestFavourite(test.id);
        else
          this.secureStorage.addTestFavourite(test);
      });
  }

  openTestDetail(test: TestDataDTO)
  {
    this.navCtrl.navigateForward('/test-detail/' + test.id);
  }

  reset()
  {
    store.dispatch({ type: 'resetAll' });
  }
}
