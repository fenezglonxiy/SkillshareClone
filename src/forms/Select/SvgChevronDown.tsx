import SvgIcon from "../../SvgIcon/SvgIcon";

const SvgChevronDown = ({ title = "", ...props }) => {
  return (
    <SvgIcon focusable="false" aria-hidden="true" size="large" {...props}>
      <path
        d="M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
        fill="#002333"
      ></path>
    </SvgIcon>
  );
};

export default SvgChevronDown;
