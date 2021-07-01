import React, { Component } from 'react';
import Tooltip from 'components/commons/CustomTooltip';
// import { isPST } from '../../../utils/isPST';

export default class HeaderTimezone extends Component {
  render() {
    // const display = isPST() ? 'none' : 'block';
    // TODO
    const display = 'block';
    return (
      <div className="site--header__notice" style={{ display }}>
        <Tooltip
          id="timeZoneTooltip"
          className="inline-block site--header__tooltip"
          triggerText={<span className="ico ico--clock" />}
          tooltip="Your computers timezone needs to be changed for the proper
                  functionality. Please switch your computer's timezone to Pacific
                  Standard Time. This can be done by going to your clock settings on
                  your computer."
        />
      </div>
    );
  }
}
