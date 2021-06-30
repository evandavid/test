import React, { useEffect, useState, useRef } from 'react';
import useContentful from 'utils/hooks/useContentful';
import Link from 'next/link';
import PropertyCard from './PropertyCard';
import range from 'lodash/range';
import chunk from 'lodash/chunk';
import shuffle from 'lodash/shuffle';

import { breakpoints } from './util';
import BtnCommon from 'components/commons/buttons/BtnCommon';
import {
  Header,
  CarouselContainer,
  LearnMoreInvestment,
  CarouselIndicactorContainer,
  PropertyContainer,
  DashboardPropertyContainer,
} from './styled';

const DashboardInvestmentList = ({ backgroundColor = '#f8f8f7' }) => {
  const carouseContainerRef = useRef();
  const touchStart = useRef();
  const touchEnd = useRef();

  const [displayCount, setDisplayCount] = useState(0);
  const [currentDisplayCount, setCurrentDisplayCount] = useState(0);
  const [list, setList] = useState([]);

  /** need to use state,  shuffle in useContenfull will cause looping */
  const [propertyIds] = useState(shuffle([78, 74, 67, 66, 64, 63, 52, 14, 16, 65, 56, 37]));
  const totalPages = 12 / displayCount;

  const { data: dashboard } = useContentful({
    contentType: 'properties',
    filterBySite: true,
    filterByField: {
      field: 'fields.id[in]',
      value: propertyIds.join(','),
    },
    options: { order: '-fields.isModivInvestment,-fields.id' },
  });

  const onTouchStart = evt => {
    if (carouseContainerRef.current) {
      touchStart.current = evt.targetTouches[0].clientX;
    }
  };

  const onTouchMove = evt => {
    if (carouseContainerRef.current) {
      touchEnd.current = evt.targetTouches[0].clientX;
    }
  };

  const onTouchEnd = () => {
    if (carouseContainerRef.current) {
      if (touchStart.current - touchEnd.current > 150) {
        // do your stuff here for right to left swipe
        if (currentDisplayCount < totalPages - 1) {
          setCurrentDisplayCount(currentDisplayCount + 1);
        }
      }

      if (touchStart.current - touchEnd.current < -150) {
        // do your stuff here for left to right swipe
        if (currentDisplayCount) {
          setCurrentDisplayCount(currentDisplayCount - 1);
        }
      }
    }
  };

  useEffect(() => {
    if (dashboard) setList(shuffle(dashboard));
  }, [dashboard]);

  useEffect(() => {
    const { width } = window.screen;
    const result = breakpoints.find(o => {
      return width >= o.min && width <= o.max;
    });

    if (result) {
      setDisplayCount(result.toShow);
    }
  }, []);

  const chunked = chunk(list, displayCount);

  if (!dashboard || !chunked.length) return null;
  return (
    <DashboardPropertyContainer
      style={{ backgroundColor }}
      className="dashboard-property-container"
    >
      <Header className="col-12">
        <h4>Explore our Investments</h4>
      </Header>

      <CarouselContainer
        ref={carouseContainerRef}
        data-left={-currentDisplayCount * 100}
        data-width={totalPages * 100}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {chunked.map((slice, idx) => (
          <PropertyContainer key={`content-${idx}`}>
            <div className="row">
              {slice.map((item, itdx) => (
                <div key={`chunked-${idx}-${itdx}`} className="col-md-4 col-lg-3 col-sm-6">
                  <PropertyCard data={item} />
                </div>
              ))}
            </div>
          </PropertyContainer>
        ))}
      </CarouselContainer>

      <div className="row">
        <div className="col-6">
          <CarouselIndicactorContainer>
            {range(totalPages).map(idx => (
              <li
                onClick={() => {
                  setCurrentDisplayCount(idx);
                }}
                key={`indicator-${idx}`}
                className={idx === currentDisplayCount ? 'active' : ''}
              />
            ))}
          </CarouselIndicactorContainer>
        </div>
      </div>

      <div className="row">
        <LearnMoreInvestment>
          <Link href="/investments" passHref>
            <BtnCommon>See More</BtnCommon>
          </Link>
        </LearnMoreInvestment>
      </div>
    </DashboardPropertyContainer>
  );
};

export default DashboardInvestmentList;
