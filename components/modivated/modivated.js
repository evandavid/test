/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';
import CoverImage from 'public/img/modivated/cover-image.png';
import BtnCommon from 'components/commons/buttons/BtnCommon';
import * as Styled from './styled';
import Link from 'next/link';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

const modivated = () => (
  <Styled.ModivatedSection>
    <Styled.ModivatedContainer>
      <Styled.ModivatedRow>
        <Styled.ModivatedOrderTwo>
          <img src={CoverImage} alt="CoverImage" />
        </Styled.ModivatedOrderTwo>
        <Styled.ModivatedOrderOne>
          <Styled.ModivatedTextHolder>
            <h4>
              <FormattedMessage {...messages.headline} />
            </h4>
            <p>
              <FormattedMessage {...messages.description} />
            </p>
            <Styled.ModivatedList>
              <Styled.ModivatedListItem>
                <div>
                  <Styled.StyledCheckCircle />
                </div>
                <Styled.ModivatedTextWrap>
                  <span>
                    <FormattedMessage {...messages.pointOne} />
                  </span>
                </Styled.ModivatedTextWrap>
              </Styled.ModivatedListItem>
              <Styled.ModivatedListItem>
                <div>
                  <Styled.StyledCheckCircle />
                </div>
                <Styled.ModivatedTextWrap>
                  <span>
                    <FormattedMessage {...messages.pointTwo} />
                  </span>
                </Styled.ModivatedTextWrap>
              </Styled.ModivatedListItem>
              <Styled.ModivatedListItem>
                <div>
                  <Styled.StyledCheckCircle />
                </div>
                <Styled.ModivatedTextWrap>
                  <span>
                    <FormattedMessage {...messages.pointThree} />
                  </span>
                </Styled.ModivatedTextWrap>
              </Styled.ModivatedListItem>
              <Styled.ModivatedListItem>
                <div>
                  <Styled.StyledCheckCircle />
                </div>
                <Styled.ModivatedTextWrap>
                  <span>
                    <FormattedMessage {...messages.pointFour} />
                  </span>
                </Styled.ModivatedTextWrap>
              </Styled.ModivatedListItem>
            </Styled.ModivatedList>
          </Styled.ModivatedTextHolder>

          <div className="row">
            <Styled.SignUpNow>
              <Link href="/auth/signup" passHref>
                <BtnCommon>Get Started Today</BtnCommon>
              </Link>
            </Styled.SignUpNow>
          </div>

          <div className="row">
            <Styled.Disclosure>
              <Styled.DisclosureLink>
                {/* <Tooltip
                  displayClose={false}
                  trigger={['hover']}
                  triggerText="*Risk Disclosure"
                >
                  Note that any investment in a REIT or Modiv is speculative and
                  involves substantial risks, including illiquidity and complete
                  loss of invested capital and there are no guarantees dividends
                  will be paid.
                </Tooltip> */}

                <a data-tip data-for="riskTip">
                  *Risk Disclosure
                </a>
                <ReactTooltip
                  id="riskTip"
                  place="top"
                  effect="solid"
                  type="light"
                  clickable
                  delayHide={1000}
                >
                  <Styled.TooltipText>
                    Note that any investment in a REIT or Modiv is <br />
                    speculative and involves substantial risks, including <br />
                    illiquidity and complete loss of invested capital and <br />
                    there are no guarantees dividends will be paid.
                  </Styled.TooltipText>
                </ReactTooltip>
              </Styled.DisclosureLink>
            </Styled.Disclosure>
          </div>
        </Styled.ModivatedOrderOne>
      </Styled.ModivatedRow>
    </Styled.ModivatedContainer>
  </Styled.ModivatedSection>
);

export default modivated;
