import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgOutlinedPlay = ({ fill = "#FFFFFF", ...props }) => {
  return (
    <SvgIcon {...props} size="large">
      <g fill={fill}>
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9 8.618c0-.616.494-1.116 1.105-1.118.194 0 .384.052.551.15l5.792 3.382c.341.2.552.569.552.968s-.21.768-.552.967l-5.792 3.383c-.341.2-.762.2-1.104 0A1.119 1.119 0 0 1 9 15.384V8.618z"></path>
      </g>
    </SvgIcon>
  );
};

export default SvgOutlinedPlay;
