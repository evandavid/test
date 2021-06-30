/* eslint-disable @next/next/no-img-element */
import React from 'react';
import iconUniqueOne from 'public/img/icon-unique-1.png';
import iconUniqueTwo from 'public/img/icon-unique-2.png';
import * as Styled from './styled';

const Unique = () => (
  <Styled.UniqueSection>
    <Styled.UniqueContainer className="container">
      <Styled.UniqueRowHeadline className="row">
        <Styled.UniqueColumnHeadline>
          <Styled.UniqueHeadline>Convenient Access to Commercial Real Estate</Styled.UniqueHeadline>
          <Styled.UniqueDescription>
            Modiv introduces a low-cost opportunity to invest in commercial real estate. Learn more
            about Modiv and get started today!
          </Styled.UniqueDescription>
        </Styled.UniqueColumnHeadline>
      </Styled.UniqueRowHeadline>
      <Styled.UniqueRowPoint className="row">
        <Styled.UniqueColumnPoint className="col-lg-6 col-md-12 col-sm-12">
          <Styled.UniqueList>
            <Styled.UniqueListItems>
              <img className="img-fluid" src={iconUniqueOne} alt="What Unique One" />
              <span>
                REITs are required to distribute at least 90% of their taxable income to their
                shareholders annually
              </span>
            </Styled.UniqueListItems>
            <Styled.UniqueListItems>
              <img className="img-fluid" src={iconUniqueTwo} alt="What Unique Two" />{' '}
              <span>
                Dividends are fueled by a stream of contractual rents paid by tenants of Modiv’s
                portfolio of properties
              </span>
            </Styled.UniqueListItems>
          </Styled.UniqueList>
        </Styled.UniqueColumnPoint>
      </Styled.UniqueRowPoint>
    </Styled.UniqueContainer>
  </Styled.UniqueSection>
);

export default Unique;
