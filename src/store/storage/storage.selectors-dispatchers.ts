import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    addExampleFavourite as addExampleFavouriteAction,
    removeExampleFavourite as removeExampleFavouriteAction,
} from './storage.slice';

export const storedExamplesArray = state => state.storage.favouriteExamples;

export const storedExamplesMap =
    createSelector(
        [storedExamplesArray],
        (items) => {
            if (items)
            {
                let map = {};
                for (let example of items)
                    map[example.id] = example;

                return map;
            }
            else return null;
        }
    );

@Injectable()
export class StorageActions
{
    @dispatch()
    addExampleFavourite = (favourite) => {
        return addExampleFavouriteAction(favourite);
    };
    
    @dispatch()
    removeExampleFavourite = (id) => {
        return removeExampleFavouriteAction(id);
    };
    
}