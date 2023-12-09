import SvgIcon from "../../SvgIcon/SvgIcon";

const SvgCheckboxChecked = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      size="large"
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.47 18.357L20.142 4.192a.454.454 0 0 1 .684-.067c.206.19.233.53.06.757L8.643 19.817a.494.494 0 0 1-.773-.007L3.12 13.805a.578.578 0 0 1 .046-.758.454.454 0 0 1 .685.05l4.155 5.255a.296.296 0 0 0 .464.005z"
        fill={props.fill === undefined ? "#FFFFFF" : props.fill}
      ></path>
    </SvgIcon>
  );
};

export default SvgCheckboxChecked;
