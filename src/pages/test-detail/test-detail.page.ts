import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { store, select } from '@redux-multipurpose/core';
import { goToUrl } from '@redux-multipurpose/angular-router';

import { currentTestReducer, addTest } from '../../store/current-test/current-test.slice';
import { testDataSelectById } from '../../store/ws/ws.selectors-dispatchers';
import { TestDataDTO } from '../../entities/dto/testDataDTO';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.page.html',
  styleUrls: ['./test-detail.page.scss'],
})
export class TestDetailPage implements OnInit, OnDestroy
{
  @select(["currentTest", "test"])
  test$: Observable<TestDataDTO>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit()
  {
    store.addReducer("currentTest", currentTestReducer);

    this.route.params.pipe(first())
      .subscribe(params =>
      {
        let id = params.id;
        if (id)
        {
          let test = store.selectSync(testDataSelectById(id));
          store.dispatch(addTest(test));
        }
      });
  }

  ngOnDestroy() {
    store.removeReducer("currentTest");
  }

  returnToHomeWithRedux()
  {
    store.dispatch(goToUrl("/home"));
  }
}
