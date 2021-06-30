/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import iconYouInvestImg from 'public/img/icon-you-invest.png';
import iconReitDistributesImg from 'public/img/icon-reit-distributes-taxable-income.png';
import iconPayRentImg from 'public/img/icon-tenants-pay-rent.png';
import * as Styled from './styled';
import BtnCommon from 'components/commons/buttons/BtnCommon';
import Tooltip from 'components/commons/CustomTooltip';

const HIW = () => {
  const breakpoints = [
    {
      min: 0,
      max: 767,
      name: 'mobile',
      image: {
        height: 49.91,
        width: 49.91,
      },
    },
    {
      min: 768,
      max: Infinity,
      name: 'other',
      image: {
        height: 60,
        width: 60,
      },
    },
  ];
  const [imageOptions, setImageOptions] = useState(breakpoints[0].image);

  const calculateImageOptions = () => {
    const { width } = window.screen;
    const result = breakpoints.find(o => {
      return width >= o.min && width <= o.max;
    });

    if (result) {
      setImageOptions(result.image);
    }
  };

  useEffect(() => {
    calculateImageOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Outer>
      <Styled.Container className="container hiw">
        <div className="row">
          <Styled.Header className="col-12">
            <h4>How it Works</h4>
            <p>Tenants pay us rent which we distribute to you</p>
          </Styled.Header>
        </div>
        <Styled.RowContainer className="row">
          <Styled.ColumnOne className="col-lg-4 col-md-4 col-sm-12">
            <Styled.StepFirst>
              <Styled.StepImage>
                <img {...imageOptions} src={iconYouInvestImg} alt="Icon You Invests" />
              </Styled.StepImage>
              <h5>You Invest</h5>
              <p>You can buy shares and own a piece of a Real Estate Investment Trust (REIT).</p>
            </Styled.StepFirst>
          </Styled.ColumnOne>
          <Styled.ColumnTwo className="col-lg-4 col-md-4 ol-sm-12">
            <Styled.StepTwo>
              <Styled.StepImage>
                <img {...imageOptions} src={iconPayRentImg} alt="Icon Pay Rent" />
              </Styled.StepImage>
              <h5>Tenants pay rent</h5>
              <p>Our portfolio of properties generates monthly rental payments from our tenants.</p>
            </Styled.StepTwo>
          </Styled.ColumnTwo>
          <Styled.ColumnThree className="col-lg-4 col-md-4 col-sm-12">
            <Styled.StepThree>
              <Styled.StepImage>
                <img {...imageOptions} src={iconReitDistributesImg} alt="Icon Reit Distributes" />
              </Styled.StepImage>
              <h5>The REIT distributes taxable income*</h5>
              <p>
                We set out to pay you cash distributions each month from the rental income our
                tenants pay.
              </p>
            </Styled.StepThree>
          </Styled.ColumnThree>
        </Styled.RowContainer>
        <div className="row">
          <Styled.LearnMore>
            <Link href="/how-it-works" passHref>
              <BtnCommon>Learn More</BtnCommon>
            </Link>
          </Styled.LearnMore>
        </div>
        <div className="row">
          <Styled.Disclosure>
            <Styled.DisclosureLink>
              <Tooltip
                triggerText={'*Disclosure'}
                tooltip="The payment of rent by tenants, or that distributions will be paid to shareholders
                  on a monthly basis, is not guaranteed."
              />
            </Styled.DisclosureLink>
          </Styled.Disclosure>
        </div>
      </Styled.Container>
    </Styled.Outer>
  );
};

export default HIW;
