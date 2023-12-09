import clsx from "clsx";
import { getBase64 } from "../lib/logo";

const SRC_PREFIX = "data:image/svg+xml;base64,";

type Props = {
  hexColorCode?: string;
  ariaHidden?: boolean;
  className?: string;
  imgSrc?: string;
};

const SkillshareLogo: React.FC<Props> = ({
  hexColorCode = "#FFFFFF",
  ariaHidden = false,
  imgSrc = SRC_PREFIX + getBase64(hexColorCode),
  className,
}) => {
  return (
    <img
      src={imgSrc}
      className={clsx(className)}
      alt="Skillshare"
      aria-hidden={ariaHidden}
    />
  );
};

export default SkillshareLogo;
