// @flow
import React from "react";
import { connect } from "react-redux";

import CollapsibleCityItem from "../../components/CollapsibleCityItem";
import { actions } from "../../reducers/cityListReducer";

const CityList = ({ cityList, removeCity }) => {
  function removeItem(parentID: number, childID: number): void {
    removeCity(parentID, childID);
  }

  return (
    <>
      {cityList &&
        cityList.map(city => {
          const { City, ID, Name, Phone, subcities } = city;
          return (
            <CollapsibleCityItem
              key={ID}
              ID={ID}
              Name={Name}
              City={City}
              Phone={Phone}
              subcities={subcities}
              removeItem={removeItem}
            />
          );
        })}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCity: (parentID, childID) =>
      dispatch(actions.removeCityLoading({ parentID, childID }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CityList);
