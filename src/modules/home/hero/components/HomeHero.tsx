import { useMediaQuery, useTheme } from "@mui/material";
import DesktopHomeHero from "./DesktopHomeHero";
import MobileHomeHero from "./MobileHomeHero";

const HomeHero = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section>{isDesktop ? <DesktopHomeHero /> : <MobileHomeHero />}</section>
  );
};

export default HomeHero;
