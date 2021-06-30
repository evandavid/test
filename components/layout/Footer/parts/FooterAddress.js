/* eslint-disable @next/next/no-img-element */
import React from 'react';
import linkedInImg from 'public/img/linked-in.svg';
import twitterImg from 'public/img/twitter.svg';
import facebookImg from 'public/img/facebook.svg';
import * as Styled from './styled';

const FooterAddress = ({ generalInfo: { street, city, state, zip, email, emailUI, phone } }) => (
  <Styled.FooterContainer>
    <p>
      <a
        title="Open address in google maps"
        target="_blank"
        rel="noopener noreferrer"
        href={
          'https://www.google.com/maps/place/' +
          escape(
            street +
              ',+Costa+Mesa,+CA+92626,+USA/@33.6844561,-117.8854603,16.9z/data=!4m7!1m4!3m3!1s0x80dcdf22109bf863:0x668aa61d4e5ebb4e!2s3090+Bristol+St,+Costa+Mesa,+CA+92626,+USA!3b1!3m1!1s0x80dcdf22109bf863:0x668aa61d4e5ebb4e?hl=en'
          )
        }
      >
        <Styled.FooterText>{street}</Styled.FooterText>
        <Styled.FooterText>
          {city}, {state} {zip}
        </Styled.FooterText>
      </a>
      <Styled.FooterLink href={`mailto:${email}`}>{emailUI}</Styled.FooterLink>
      <Styled.FooterLink href={`tel:${phone}`}>{phone}</Styled.FooterLink>
      <Styled.FooterSocialMedia>
        <li>
          <a
            href="https://www.facebook.com/modivinc"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={facebookImg} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/modiv" target="_blank" rel="noopener noreferrer nofollow">
            <img src={twitterImg} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/modiv-inc"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={linkedInImg} alt="Linked In" />
          </a>
        </li>
      </Styled.FooterSocialMedia>
    </p>
  </Styled.FooterContainer>
);

export default FooterAddress;
