import React from 'react';
import Intro from 'components/Intro/Intro';
import DashboardInvestmentList from 'components/Properties/DashboardInvestmentList';
import Modivated from 'components/Modivated/Modivated';
import Unique from 'components/Unique/Unique';
import HIW from 'components/HowItWorks/Hiw';
import withSEO from 'utils/hoc/withSEO';
import getSEOData from 'utils/getSEOData';
import { contentfulConfig } from 'utils';
// import features from 'utils/constants/features';

const Homepage = () => {
  // console.log('config.constants.features.isTranslationEnabled', features);
  return (
    <div>
      <Intro />
      <Modivated />
      <Unique />
      <section className="section section--how-it-works large-padding-top" id="how-it-works">
        <HIW />
      </section>
      {/* <DashboardInvestmentList /> */}
    </div>
  );
};

/** getServerSideProps if we want to get SEO on SSR and not SSG */
export async function getStaticProps() {
  const seo = await getSEOData('/', contentfulConfig);
  return { props: { seoData: seo } };
}

export default withSEO(Homepage);
