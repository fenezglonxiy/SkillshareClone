import SvgIcon from "../../SvgIcon/SvgIcon";

const SvgCheckboxUnchecked = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      focusable="false"
      aria-hidden="true"
      size="large"
      {...props}
    >
      <rect
        width="100%"
        height="100%"
        fill={props.fill === undefined ? "#FFFFFF" : props.fill}
      ></rect>
    </SvgIcon>
  );
};

export default SvgCheckboxUnchecked;
