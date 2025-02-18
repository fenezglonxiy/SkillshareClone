import SvgIcon from "../SvgIcon/SvgIcon";

const SvgClose = ({ title = "Close", ...props }) => {
  return (
    <SvgIcon title={title} {...props} size="large">
      <defs>
        <symbol
          viewBox="0 0 24 24"
          id="close"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.707 12l7.147 7.146a.5.5 0 0 1-.708.708L12 12.707l-7.146 7.147a.5.5 0 0 1-.708-.708L11.293 12 4.146 4.854a.5.5 0 1 1 .708-.708L12 11.293l7.146-7.147a.5.5 0 0 1 .708.708L12.707 12z"
            fill="currentColor"
          ></path>
        </symbol>
      </defs>
      <g fill="#FFFFFF">
        <path
          d="M12.707 12l7.147 7.146a.5.5 0 0 1-.708.708L12 12.707l-7.146 7.147a.5.5 0 0 1-.708-.708L11.293 12 4.146 4.854a.5.5 0 1 1 .708-.708L12 11.293l7.146-7.147a.5.5 0 0 1 .708.708L12.707 12z"
          fill="currentColor"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default SvgClose;
