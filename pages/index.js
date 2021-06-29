import React from 'react';
import Intro from 'components/Intro/Intro';
import DashboardInvestmentList from 'components/Intro/Properties/DashboardInvestmentList';

const Homepage = () => {
  return (
    <div>
      <Intro />
      {/* <Modivated />
      <Unique /> */}
      <section className="section section--how-it-works large-padding-top" id="how-it-works">
        {/* <HIW /> */}
      </section>
      <DashboardInvestmentList />
    </div>
  );
};

Homepage.getInitialProps = async () => {
  // prefetch seo data TODO
  return { data: 'data' };
};

export default Homepage;
