import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgSearch = ({ title = "Search", ...props }) => {
  return (
    <SvgIcon title={title} {...props} size="large">
      <path
        d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm6-1.708l5.854 5.854a.5.5 0 0 1-.708.708l-5.854-5.855a8 8 0 1 1 .707-.707z"
        fill={`${props.fill === undefined ? "#FFFFFF" : props.fill}`}
      ></path>
    </SvgIcon>
  );
};

export default SvgSearch;
