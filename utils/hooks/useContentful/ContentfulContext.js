import React, { createContext, useContext } from 'react';

const initialState = {
  contentfulConfig: null,
};

const ContentfulConfigContext = createContext(initialState);

const ContentfulContextProvider = ({ children, contentfulConfig }) => {
  return (
    <ContentfulConfigContext.Provider value={{ contentfulConfig }}>
      {children}
    </ContentfulConfigContext.Provider>
  );
};

export const useContentfulConfig = () => {
  return useContext(ContentfulConfigContext);
};

export default ContentfulContextProvider;
