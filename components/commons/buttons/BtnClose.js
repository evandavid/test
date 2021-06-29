import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class BtnClose extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    return (
      <button
        type={this.props.type || 'submit'}
        className={'btn--close ' + this.props.className}
        onClick={this.props.onClose}
      >
        <span className="ico ico--cross" />
      </button>
    );
  }
}
