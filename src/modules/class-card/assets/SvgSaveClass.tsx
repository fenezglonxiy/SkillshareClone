import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgSaveClass = ({ title = "Save Class", ...props }) => {
  return (
    <SvgIcon
      title={title}
      {...props}
      aria-hidden="true"
      focusable="false"
      size="large"
    >
      <g fill="none" fillRule="nonzero">
        <path
          fill="#394649"
          d="M6 20.586l5.224-5.223a1.1 1.1 0 0 1 1.556 0L18 20.586V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16.586zM7 2h10a2 2 0 0 1 2 2v17.31a.7.7 0 0 1-1.195.495l-5.732-5.734a.1.1 0 0 0-.142 0l-5.736 5.734A.7.7 0 0 1 5 21.31V4a2 2 0 0 1 2-2z"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default SvgSaveClass;
