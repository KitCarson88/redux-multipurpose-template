import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    addTestFavourite as addTestFavouriteAction,
    removeTestFavourite as removeTestFavouriteAction
} from './secure-storage.slice';

export const storedTestsArray = state => state.secureStorage.infos.favouriteTests;

export const storedTestsMap =
    createSelector(
        [storedTestsArray],
        (items) => {
            if (items)
            {
                let map = {};
                for (let test of items)
                    map[test.id] = test;

                return map;
            }
            else return null;
        }
    );

@Injectable()
export class SecureStorageActions
{
    @dispatch()
    addTestFavourite = (test) => {
        return addTestFavouriteAction(test);
    };
    
    @dispatch()
    removeTestFavourite = (id) => {
        return removeTestFavouriteAction(id);
    };
    
}