import Button from "../../Button/Button";

type Props = {
  label?: string;
};

const SignUpButton = (props: Props) => {
  return (
    <Button size="large" hoverStyle="darker" fullWidth>
      {props.label === undefined ? "Sign Up" : props.label}
    </Button>
  );
};

export default SignUpButton;
