import Meta from 'components/commons/Meta';

const withSEO = Component => {
  const SEOComponent = ({ seoData, ...props }) => {
    return (
      <>
        <Meta {...seoData} />
        <Component {...props} />
      </>
    );
  };

  return SEOComponent;
};

export default withSEO;
