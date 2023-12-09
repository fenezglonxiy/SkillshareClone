import Typography from "../../Typography/Typography";

export type FormStatusTextProps = {
  children: string;
} & React.ComponentPropsWithRef<"p">;

const FormStatusText = (
  props: FormStatusTextProps
): React.ReactElement<FormStatusTextProps> => {
  const { children, color, ...rest } = props;

  return (
    <Typography color="supportText" variant="body2" {...rest}>
      {children}
    </Typography>
  );
};

export default FormStatusText;
