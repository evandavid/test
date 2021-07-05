import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FooterLogo, FooterAddress, FooterModule, FooterSocial } from './parts';
import messages from './messages';
import Disclosure from './Disclosure';
import getGeneralInfo from 'utils/constants/generalInfo';

import footerColumnOneLinks from 'utils/constants/links/footerColumnOne';
import footerColumnTwoLinks from 'utils/constants/links/footerColumnTwo';
import footerColumnThreeLinks from 'utils/constants/links/footerColumnThree';
import socialLinks from 'utils/constants/links/social';

// import { withSiteReitId } from '#features/site/hoc';
import * as Styled from './styled';
import common from 'utils/enums/common';

const REITS = common.REITS;
export const ID = 'footer';

const Footer = props => {
  const generalInfo = getGeneralInfo(REITS.NNN_REIT.id);

  return (
    <Styled.NoPrintDiv id={ID}>
      <footer className="footer">
        <Styled.Container className="container">
          <Styled.RowContainer className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <FooterLogo generalInfo={generalInfo} />
            </div>
            <Styled.ColumnOne className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <FooterAddress generalInfo={generalInfo} />
              <FooterSocial links={socialLinks} />
            </Styled.ColumnOne>
            <Styled.ColumnTwo className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
              <FooterModule
                links={footerColumnOneLinks}
                {...props}
                title={<FormattedMessage {...messages.colTitle1} />}
              />
            </Styled.ColumnTwo>
            <Styled.ColumnThree className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
              <FooterModule
                links={footerColumnTwoLinks}
                {...props}
                title={<FormattedMessage {...messages.colTitle1} />}
              />
            </Styled.ColumnThree>
            <Styled.ColumnFour className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
              <FooterModule
                links={footerColumnThreeLinks}
                {...props}
                title={<FormattedMessage {...messages.colTitle1} />}
              />
            </Styled.ColumnFour>
          </Styled.RowContainer>
          <Styled.RowDisContainer className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Disclosure />
            </div>
          </Styled.RowDisContainer>
        </Styled.Container>
      </footer>
    </Styled.NoPrintDiv>
  );
};

export default injectIntl(Footer);
