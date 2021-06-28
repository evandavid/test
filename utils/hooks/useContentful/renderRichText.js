import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import PropTypes from 'prop-types';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

// richText from contentful may require unique styling options for the html tags inside
// rather than recreating tag rules for each contentful call, just add array of required tags
// e.g. useRichText(disclaimer[0].disclaimerBody, ['a'])
// add further unique rich text styles inside the getOptions function

const getOptions = htmlTags => {
  const options = {};

  options.renderNode = {
    ...(htmlTags.includes('a') && {
      [INLINES.HYPERLINK]: node => (
        <a
          href={`${node.data.uri}`}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.content[0].value}
        </a>
      ),
    }),
    ...(htmlTags.includes('p_disclaimer') && {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="disclaimer__text text--primary">{children}</p>
      ),
    }),
    ...(htmlTags.includes('blog_disclaimer') && {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <div className="disclaimer__text">{children}</div>
      ),
    }),
  };
  options.renderMark = {
    ...(htmlTags.includes('b') && {
      [MARKS.BOLD]: text => <b className="title">{text}</b>,
    }),
  };

  return options;
};

export const renderRichText = (content, htmlTags) =>
  documentToReactComponents(content, getOptions(htmlTags));

renderRichText.propTypes = {
  content: PropTypes.array,
  htmlTags: PropTypes.array,
};
