import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgFacebook = ({ title = "Facebook Icon", ...props }) => {
  return (
    <SvgIcon title={title} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0829 3.65686 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.93043 3.93012 12.2146 3.93012C13.3087 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1921C11.9499 6.60261 11.5625 7.37816 11.5625 8.17381V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3431 19.2452 20 15.0829 20 10.0611Z"
        fill={props.fill === undefined ? "#1877F2" : props.fill}
      ></path>
    </SvgIcon>
  );
};

export default SvgFacebook;