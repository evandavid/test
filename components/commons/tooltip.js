import { ToolTipTriggerText, MyReactTooltip, TooltipText } from './styled';

const Tooltip = ({ triggerText, tooltip, id }) => {
  return (
    <>
      <ToolTipTriggerText data-tip data-for={id}>
        {triggerText}
      </ToolTipTriggerText>

      <MyReactTooltip id={id} place="top" effect="solid" type="light" clickable>
        <TooltipText dangerouslySetInnerHTML={{ __html: tooltip }} />
      </MyReactTooltip>
    </>
  );
};

export default Tooltip;
