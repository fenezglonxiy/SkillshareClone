import SvgIcon from "../../../SvgIcon/SvgIcon";

const SvgList = ({ title = "List", ...props }) => {
  return (
    <SvgIcon title={title} size="large" {...props} width="25" height="25">
      <path
        d="M2 5.5C2 5.77614 2.22386 6 2.5 6H21.5C21.7761 6 22 5.77614 22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5ZM2.5 12C2.22386 12 2 11.7761 2 11.5C2 11.2239 2.22386 11 2.5 11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H2.5ZM2.5 18C2.22386 18 2 17.7761 2 17.5C2 17.2239 2.22386 17 2.5 17H21.5C21.7761 17 22 17.2239 22 17.5C22 17.7761 21.7761 18 21.5 18H2.5Z"
        fill={`${props.fill === undefined ? "#FFFFFF" : props.fill}`}
      ></path>
    </SvgIcon>
  );
};

export default SvgList;
