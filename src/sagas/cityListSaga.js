// @flow
import { call, select, put, takeLatest } from "redux-saga/effects";
import { get } from "immutable";

import { actions, cityList, types } from "../reducers/cityListReducer";
import data from "../data/apiResponse.json";
import cityListMapper from "../helpers/cityListMapper";

async function cityListApiCall() {
  return {
    data
  };
}

export function* getCityList() {
  try {
    const payload = yield call(cityListApiCall);
    if (payload) {
      const mappedCityList = cityListMapper(payload.data);
      yield put(actions.cityListLoadSuccess(mappedCityList));
    }
  } catch (error) {
    yield put(actions.cityListLoadError(error));
  }
}

export function* removeCity({ cityID }) {
  try {
    type CityIDs = {
      parentID: number,
      childID: number
    };
    const { parentID, childID }: CityIDs = cityID;

    const state = yield select(cityList);
    let cities = get(state, "data").toJS();

    if (childID) {
      const parentIndex = cities.findIndex(city => {
        return city.ID === parentID;
      });
      if (parentIndex) {
        const removedChildList = cities[parentIndex].subcities.filter(
          subcity => {
            return subcity.ID !== childID;
          }
        );
        cities[parentIndex].subcities = removedChildList;
        yield put(actions.removeCitySuccess(cities));
      }
    } else if (parentID) {
      cities = cities.filter(city => {
        return city.ID !== parentID;
      });
      yield put(actions.removeCitySuccess(cities));
    } else {
      yield put(actions.removeCityError({errorMessage: "Something occured."}));
    }
  } catch (error) {
    yield put(actions.removeCityError(error));
  }
}

export default [
  takeLatest(types.CITY_LIST_LOADING, getCityList),
  takeLatest(types.REMOVE_CITY_LOADING, removeCity)
];
