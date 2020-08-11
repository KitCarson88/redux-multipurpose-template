import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';

import {
    hide as hideAction,
    setState as setStateAction,
} from './splash.slice';

@Injectable()
export class SplashActions
{
    @dispatch()
    hide = () => {
        return hideAction();
    };
    
    @dispatch()
    setState = () => {
        return setStateAction();
    };
    
}