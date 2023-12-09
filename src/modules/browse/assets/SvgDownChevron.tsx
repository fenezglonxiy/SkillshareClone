import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgDownChevron = ({ title = "", ...props }) => {
  return (
    <SvgIcon
      title={title}
      {...props}
      height="10"
      viewBox="0 0 18 10"
      width="10"
    >
      <path
        d="M9.71533 9.68522C9.70988 9.69105 9.70437 9.69681 9.69879 9.70251C9.30372 10.1058 8.6706 10.0981 8.28467 9.68522L0.159216 0.992738C-0.0530721 0.765635 -0.0530721 0.397429 0.159216 0.170327C0.371504 -0.0567756 0.715692 -0.0567756 0.92798 0.170327L9 8.80564L17.072 0.170327C17.2843 -0.0567756 17.6285 -0.0567756 17.8408 0.170327C18.0531 0.397429 18.0531 0.765635 17.8408 0.992738L9.71533 9.68522Z"
        fill={props.fill === undefined ? "#FFFFFF" : props.fill}
      ></path>
    </SvgIcon>
  );
};

export default SvgDownChevron;
