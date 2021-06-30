import { ToolTipTriggerText, MyReactTooltip, TooltipText } from './styled';

const Tooltip = ({ triggerText, tooltip }) => {
  return (
    <>
      <ToolTipTriggerText data-tip data-for="DisclosureTooltip">
        {triggerText}
      </ToolTipTriggerText>

      <MyReactTooltip id="DisclosureTooltip" place="top" effect="solid" type="light" clickable>
        <TooltipText dangerouslySetInnerHTML={{ __html: tooltip }} />
      </MyReactTooltip>
    </>
  );
};

export default Tooltip;
