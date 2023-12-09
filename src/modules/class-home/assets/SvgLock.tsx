import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgLock = ({ fill = "#002333", ...props }) => {
  return (
    <SvgIcon {...props} size="large">
      <g fill={fill}>
        <path
          d="M7 11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H7zm0-1h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm1 0h8V8a4 4 0 1 0-8 0v2zm3.5 4.866a1 1 0 1 1 1 0V16.5a.5.5 0 1 1-1 0v-1.634zM12 3a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5z"
          fill="#747777"
        ></path>
      </g>
    </SvgIcon>
  );
};

export default SvgLock;
