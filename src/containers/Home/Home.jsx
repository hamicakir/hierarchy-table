// @flow
import React, { PureComponent } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CityList from "./Home.CityList";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

import { actions, makeSelectCityList } from "../../reducers/cityListReducer";

class Home extends PureComponent {
  async componentDidMount() {
    const { getCityList } = this.props;
    await getCityList();
  }

  render() {
    const {
      cityList: { error, data, loading }
    } = this.props;

    return (
      <HomeContainer>
        <HomeWrapper>
          {error && <Error />}
          {loading ? <Loading /> : <CityList cityList={data} />}
        </HomeWrapper>
      </HomeContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cityList: makeSelectCityList()
});

const mapDispatchToProps = dispatch => {
  return {
    getCityList: () => dispatch(actions.cityListLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const HomeContainer = Styled.div`
  width: calc(100% - 120px);
  margin: 0 auto;
`;

const HomeWrapper = Styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
