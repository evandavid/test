import { useEffect } from 'react';
import PropTypes from 'prop-types';
import contentfulClient from './contentful';
import { useContentfulConfig } from './ContentfulContext';
import { BRIX_CONTENTFUL, NNN_CONTENTFUL, BRIX } from '../../enums/site';
import { useSafeSetState } from '#hooks/useSetState';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const useContentful = ({
  contentType,
  filterBySite = false,
  filterByField,
  options,
}) => {
  const [state, safeSetState] = useSafeSetState(initialState);
  const { siteId, contentfulConfig } = useContentfulConfig();
  const site = siteId === BRIX ? BRIX_CONTENTFUL : NNN_CONTENTFUL;

  useEffect(() => {
    const fetchEntries = async () => {
      safeSetState({ isLoading: true });
      try {
        const entries = await contentfulClient(contentfulConfig).getEntries({
          // eslint-disable-next-line camelcase
          content_type: contentType,
          ...(filterBySite ? { 'fields.site': site } : {}),
          ...(filterByField
            ? { [filterByField.field]: filterByField.value }
            : {}),
          ...options,
        });

        const fields = entries.items.map(item => item.fields);
        safeSetState({ data: fields });
      } catch (error) {
        safeSetState({ error });
      } finally {
        safeSetState({ isLoading: false });
      }
    };
    fetchEntries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByField?.value]);

  return state;
};

export default useContentful;

useContentful.propTypes = {
  contentType: PropTypes.string.isRequired,
  filterBySite: PropTypes.bool,
  filterByField: PropTypes.object,
  options: PropTypes.object,
};
