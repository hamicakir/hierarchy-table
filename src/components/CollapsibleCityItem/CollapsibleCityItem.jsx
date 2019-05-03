// @flow
import React, { Component } from "react";
import Styled, { withTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";


type Props = {
  ID: number,
  Name: string,
  City: string,
  Phone: string,
  subcities: Array,
  removeItem: Function
};

type State = {
  isOpen: boolean
};

class CollapsibleCityItem extends Component<Props, State> {
  state = {
    isOpen: false
  };

  handleAccordionStatus = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      City,
      ID,
      Name,
      Phone,
      removeItem,
      subcities,
      theme: {
        colors: { primaryColor, red }
      }
    } = this.props;
    const { isOpen } = this.state;

    return (
      <ItemWrapper>
        <Parent onClick={this.handleAccordionStatus}>
          <ParentItemText>
            ID:
            {ID}
          </ParentItemText>
          <ParentItemText>
            Name:
            {Name}
          </ParentItemText>
          <ParentItemText>
            City:
            {City}
          </ParentItemText>
          <ParentItemText>
            Phone:
            {Phone}
          </ParentItemText>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => removeItem(ID)}
            color={red}
          />
          {subcities && subcities.length > 0 && (
            <FontAwesomeIcon icon={faArrowAltCircleDown} color={primaryColor} />
          )}
        </Parent>
        <Child>
          {isOpen &&
            subcities &&
            subcities.length > 0 &&
            subcities.map(city => (
              <div key={city.ID}>
                <ChildItemText>
                  ID:
                  {city.ID}
                </ChildItemText>
                <ChildItemText>
                  Name:
                  {city.Name}
                </ChildItemText>
                <ChildItemText>
                  City:
                  {city.City}
                </ChildItemText>
                <ChildItemText>
                  Phone:
                  {city.Phone}
                </ChildItemText>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => removeItem(ID, city.ID)}
                  color={red}
                />
              </div>
            ))}
        </Child>
      </ItemWrapper>
    );
  }
}

export default withTheme(CollapsibleCityItem);

const ItemWrapper = Styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;

const ParentItemText = Styled.p`
    color: ${props => props.theme.colors.primaryColor};
    padding: 5px 20px;
`;

const ChildItemText = Styled.p`
    color: ${props => props.theme.colors.secondaryColor};
`;

const Parent = Styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Child = Styled.div`
    margin: 10px 20px;
    display: inline-flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
