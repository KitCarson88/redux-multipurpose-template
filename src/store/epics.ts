import { combineEpics } from 'redux-observable-es6-compat';

import { createSplashAnimation } from './splash/splash.epics';

export default function rootEpic()
{
    return combineEpics(
		createSplashAnimation
	);
}