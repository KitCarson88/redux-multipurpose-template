import { Epic, ofType } from 'redux-observable-es6-compat';
import { delay, mergeMap } from 'rxjs/operators';
import { of, concat } from 'rxjs';

import { hide, setState } from './splash.slice';

import { constants } from '../../utils/constants';

export function createSplashAnimation(): Epic<any, any, any>
{
    return (action$, _) => action$.pipe(ofType(hide),
        mergeMap(_ => concat(
            of((setState('fadeIn'))).pipe(delay(constants.SPLASH_ANIMATION_FADE_IN_DELAY)),
            of((setState('animation'))).pipe(delay(constants.SPLASH_ANIMATION_DELAY)),
            of((setState('fadeOut'))).pipe(delay(constants.SPLASH_ANIMATION_FADE_OUT_DELAY)),
            of((setState('inactive'))).pipe(delay(800))
        ))
    );
}