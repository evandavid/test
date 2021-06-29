import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import compose from 'recompose/compose';
// import withHandlers from 'recompose/withHandlers';
// import withState from 'recompose/withState';
// import lifecycle from 'recompose/lifecycle';
// import toClass from 'recompose/toClass';
import cn from 'classnames';
import RCTooltip from 'rc-tooltip';
import { FormattedMessage } from 'react-intl';
import BtnClose from 'components/commons/buttons/BtnClose';
import messages from './messages';

// const enhance = compose(
//   withState('state', 'setState', { visible: false }),
//   withState('parent', 'setParent', { node: undefined }),
//   withHandlers({ handleClose, handleVisibleChange, rcTooltipProps }),
//   withHandlers({ rcTooltipProps }),
//   lifecycle({
//     UNSAFE_componentWillReceiveProps(props) {
//       if (props.openTooltip !== this.props.openTooltip && props.openTooltip) {
//         this.props.handleVisibleChange(true);
//       }
//     },
//     componentDidMount() {
//       const { appendToParent = true } = this.props;

//       if (appendToParent) {
//         this.props.setParent({ node: getRef(this) });
//       }
//     },
//   }),
//   toClass,
// );

const Tooltip = ({
  asterisk,
  className = '',
  noIcon,
  questionMark,
  style,
  triggerClass = '',
  triggerText,
  triggerTextDisableDefaultStyle = false,
  ...props
}) => {

  const [visible, setVisible] = useState(false);

  const handleClose = ({ setState }) => () => setVisible(visible);
  
  const handleVisibleChange = ({
    toggleFunction,
    setState,
    ...props
  }) => visible =>
    props.visible && toggleFunction ? toggleFunction() : setVisible(visible);
  
  const rcTooltipProps = ({
    appendToParent = true,
    children,
    component = false,
    placement = 'top',
    displayClose = true,
    overlayClassName = '',
    trigger,
    // Handlers
    handleClose,
    // To differentiate between props.visible and state.visible, namespace it with `props` or `state`. Maybe change?
    state,
    ...props
  }) => () => {
    const overlay = component ? (
      children
    ) : (
      <div
        className="tooltip__content"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
    const tooltipProps = {
      overlay: (
        <div className="tooltip__wrap">
          {overlay}
          {trigger !== 'hover' && displayClose && (
            <BtnClose type="button" onClose={handleClose} />
          )}
        </div>
      ),
      overlayClassName,
      visible: props.visible || state.visible,
      onVisibleChange: props.handleVisibleChange,
      placement,
      transitionName: 'rc-tooltip-zoom',
      trigger: trigger || 'click',
    };
    if (appendToParent) {
      return Object.assign({}, tooltipProps, {
        getTooltipContainer: () => props.parent.node,
      });
    }
    return tooltipProps;
  };
  
  const getRef = ref => {
    const element = ReactDOM.findDOMNode(ref); // eslint-disable-line
    return element && element.parentNode;
  };
  

  return (
    <div
      style={style}
      className={cn(
        className,
        { 'tooltip--questionmark': questionMark },
        { 'tooltip--noicon': noIcon },
      )}
    >
      <RCTooltip {...props.rcTooltipProps()}>
        {questionMark ? (
          <span className="tooltip__question">?</span>
        ) : (
          <span className={triggerClass}>
            <span
              className={!triggerTextDisableDefaultStyle && 'rc-tooltip__link'}
            >
              {triggerText || (
                <FormattedMessage {...messages.disclosureTooltipTriggerLabel} />
              )}
            </span>
            {asterisk ? '*' : ''}
          </span>
        )}
      </RCTooltip>
    </div>
  );
};

tooltip.propTypes = {
  asterisk: PropTypes.any,
  className: PropTypes.string,
  noIcon: PropTypes.any,
  questionMark: PropTypes.any,
  style: PropTypes.any,
  triggerClass: PropTypes.string,
  triggerText: PropTypes.any,
  triggerTextDisableDefaultStyle: PropTypes.bool,
};

export default Tooltip;
