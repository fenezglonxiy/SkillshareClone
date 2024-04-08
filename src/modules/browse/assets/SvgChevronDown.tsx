import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgChevronDown = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <g stroke="#FFFFFF" fill="#FFFFFF">
        <path
          d="M8.477 11.123a.647.647 0 0 1-.954 0L2.106 5.33a.407.407 0 0 1 0-.549.346.346 0 0 1 .513 0L8 10.537l5.381-5.757a.346.346 0 0 1 .513 0 .407.407 0 0 1 0 .549l-5.417 5.795z"
          fill="#747777"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default SvgChevronDown;
