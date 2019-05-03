import { fromJS } from "immutable";
import { createSelector } from 'reselect';

export const types = {
    CITY_LIST_LOADING: "CITY_LIST_LOADING",
    CITY_LIST_LOAD_SUCCESS: "CITY_LIST_LOAD_SUCCESS",
    CITY_LIST_LOAD_ERROR: "CITY_LIST_LOAD_ERROR",

    REMOVE_CITY_LOADING: "REMOVE_CITY_LOADING",
    REMOVE_CITY_SUCCESS: "REMOVE_CITY_LOAD_SUCCESS",
    REMOVE_CITY_ERROR: "REMOVE_CITY_LOAD_ERROR",
};

export const actions = {
    cityListLoading: () => ({type: types.CITY_LIST_LOADING}),
    cityListLoadSuccess: (payload) => ({ type: types.CITY_LIST_LOAD_SUCCESS, payload}),
    cityListLoadError: (error) => ({ type: types.CITY_LIST_LOAD_ERROR, error }),

    removeCityLoading: (cityID) => ({type: types.REMOVE_CITY_LOADING, cityID }),
    removeCitySuccess: (payload) => ({ type: types.REMOVE_CITY_SUCCESS, payload}),
    removeCityError: (error) => ({ type: types.REMOVE_CITY_ERROR, error }),
};

const initialState = fromJS({
    data: [],
    error: null,
    loading: false,
});

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CITY_LIST_LOADING:
            return state
                .set("loading", fromJS(true));
        case types.CITY_LIST_LOAD_SUCCESS:
            return state
                .set("data", fromJS(action.payload))
                .set("loading", false);
        case types.CITY_LIST_LOAD_ERROR:
            return state
                .set("error", fromJS(action.error))
                .set("loading", false);
        case types.REMOVE_CITY_SUCCESS:
            return state
                .set("data", fromJS(action.payload));
        case types.REMOVE_CITY_ERROR:
            return state
                .set("error", fromJS(action.error));
        default:
            return state;
    }
};

export const cityList = state => state.cityList;

export const makeSelectCityList = () => createSelector(cityList, substate => substate.toJS());

export default businessReducer;