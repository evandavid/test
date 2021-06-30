/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import {
  PropertyCardContainer,
  PropertyCardHeader,
  PropertyCardImage,
  PropertyCardInfoTop,
  PropertyCardInfoMiddle,
  PropertyCardLogo,
  PropertyCardInfo,
} from './styled';
import { flattenImageProperty } from 'utils/flattenContentfulImages';
import messages from './messages';
import { injectIntl } from 'react-intl';
import Link from 'next/link';
import Image from 'next/image';
import CapRateImage from 'public/img/investments/Icon-Cap-Rate.png';
import IconAverageImage from 'public/img/investments/Icon-Average-rental-Increases.png';
import { breakpoints } from '../../utils';

const PropertyCard = ({ data, intl }) => {
  const [imageOptions, setImageOptions] = useState({
    fm: 'webp',
    ...breakpoints[0].image,
  });

  const imageLogoOptions = {
    fm: 'webp',
    w: 55,
    h: 55,
  };

  const calculateImageOptions = () => {
    const { width } = window.screen;
    const result = breakpoints.find(o => {
      return width >= o.min && width <= o.max;
    });

    if (result) {
      setImageOptions({ fm: 'webp', ...result.image });
    }
  };

  useEffect(() => {
    calculateImageOptions();
  }, []);

  const brandLogo = flattenImageProperty(data.brandLogo, imageLogoOptions);
  const thumb = flattenImageProperty(data.thumb, imageOptions);

  return (
    <Link href={'/investments/' + data.id} passHref>
      <PropertyCardContainer>
        <PropertyCardHeader>
          <PropertyCardImage>
            {data.isModivInvestment ? (
              <div style={{ display: 'fixed' }}>
                <img
                  loading="lazy"
                  style={{ width: '100%', padding: '25px' }}
                  src={`https:${thumb?.url}`}
                  // height={thumb?.height}
                  // width={thumb?.width}
                  alt={`${data.street} ${data.city} ${intl.formatMessage(messages.productsImgAlt)}`}
                />
              </div>
            ) : (
              <img
                loading="lazy"
                src={`https:${thumb?.url}`}
                // height={thumb?.height}
                // width={thumb?.width}
                alt={`${data.street} ${data.city} ${intl.formatMessage(messages.productsImgAlt)}`}
              />
            )}
          </PropertyCardImage>
          {data.isModivInvestment ?? (
            <PropertyCardLogo>
              <img
                loading="lazy"
                src={`https:${brandLogo?.url}`}
                // height={brandLogo?.height}
                // width={brandLogo?.width}
                alt={data.brandName}
              />
            </PropertyCardLogo>
          )}
        </PropertyCardHeader>
        <PropertyCardInfo>
          <ul>
            <PropertyCardInfoTop isModivInvestment={data.isModivInvestment}>
              {data.isModivInvestment ? '' : <h6>{data.assetType ?? 'N/A'}</h6>}
              <ul>
                <li>{data.name}</li>
                <li>{data.isModivInvestment ? data.city : `${data.city}, ${data.stateShort}`}</li>
              </ul>
            </PropertyCardInfoTop>
            <PropertyCardInfoMiddle>
              <ul>
                <li>
                  <div className="icon">
                    <img className="img-fluid" src={CapRateImage} alt="Img-CapRate" />
                  </div>
                  <div className="icon__info">
                    {data.isModivInvestment ? (
                      <>
                        <strong>{data.estimatedHoldPeriod}</strong>
                        <p>Estimated Hold Period</p>
                      </>
                    ) : (
                      <>
                        <strong>
                          {data.capRate ? (data.capRate * 100).toFixed(2) + '%' : 'N/A'}
                        </strong>
                        <p>Estimated Cap Rate</p>
                      </>
                    )}
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img className="img-fluid" src={IconAverageImage} alt="Img-IconAverage" />
                  </div>
                  <div className="icon__info">
                    <strong>
                      {data.isModivInvestment
                        ? data.estimatedEquityMultiple
                        : data.rentalIncrease ?? 'N/A'}
                    </strong>
                    {data.isModivInvestment ? (
                      <p>Estimated Equity Multiple</p>
                    ) : (
                      <p>Rental Increase</p>
                    )}
                  </div>
                </li>
              </ul>
            </PropertyCardInfoMiddle>
          </ul>
        </PropertyCardInfo>
      </PropertyCardContainer>
    </Link>
  );
};

export default injectIntl(PropertyCard);
