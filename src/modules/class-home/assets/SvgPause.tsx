import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgPause = ({ fill = "#FFFFFF", ...props }) => {
  return (
    <SvgIcon size="large">
      <g fill={fill}>
        <path d="M9 7h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm3 14a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 1C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm2-15h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"></path>
      </g>
    </SvgIcon>
  );
};

export default SvgPause;
