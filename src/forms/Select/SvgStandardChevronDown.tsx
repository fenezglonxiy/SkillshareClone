import SvgIcon from "../../SvgIcon/SvgIcon";

const SvgStandardChevronDown = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      focusable="false"
      aria-hidden="true"
      size="large"
      {...props}
    >
      <path
        d="M12.71533 15.68522C12.70988 15.69105 12.70437 15.69681 12.69879 15.70251C12.30372 16.105800000000002 11.6706 16.098100000000002 11.28467 15.68522L3.159216 6.992738C2.9469279 6.765635 2.9469279 6.397429 3.159216 6.170327C3.371504 5.9432244 3.7156919999999998 5.9432244 3.92798 6.170327L12 14.80564L20.072 6.170327C20.2843 5.9432244 20.6285 5.9432244 20.8408 6.170327C21.0531 6.397429 21.0531 6.765635 20.8408 6.992738L12.71533 15.68522z"
        fillOpacity="0.54"
        fill={props.fill === undefined ? "#000000" : props.fill}
      ></path>
    </SvgIcon>
  );
};

export default SvgStandardChevronDown;
