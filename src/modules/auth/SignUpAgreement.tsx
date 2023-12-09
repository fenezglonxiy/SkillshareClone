import { useMediaQuery, useTheme } from "@mui/material";
import Link from "../../Link/Link";
import Typography from "../../Typography/Typography";

type Props = {
  align?: "left" | "right" | "center";
  className?: string;
};

const SignUpAgreement = (props: Props) => {
  const { align, className } = props;

  const renderAgreementLink = (label: string, href: string) => {
    return (
      <Link variant="captionBold" href={href} underline="hover">
        {label}
      </Link>
    );
  };

  const termsOfServiceLink = renderAgreementLink("Terms of Service", "/");
  const privacyPolicyLink = renderAgreementLink("Privacy Policy", "/");

  return (
    <Typography align={align} className={className} variant="caption">
      By signing up you agree to Skillshare's {termsOfServiceLink} and{" "}
      {privacyPolicyLink}, and agree to receive marketing communications from
      Skillshare at the email address provided. This page is protected by
      reCAPTCHA and is subject to Google's {termsOfServiceLink} and{" "}
      {privacyPolicyLink}.
    </Typography>
  );
};

export default SignUpAgreement;
