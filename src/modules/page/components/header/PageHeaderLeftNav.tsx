import { useMediaQuery, useTheme } from "@mui/material";
import HeaderSearch from "./HeaderSearch";
import BrowseMenu from "../../../browse/components/menu/BrowseMenu";
import PageHeaderMenu from "./PageHeaderMenu";

export type HeaderLeftNavProps = {
  hideNav?: boolean;
  hideSearch?: boolean;
};

const PageHeaderLeftNav = ({ hideNav, hideSearch }: HeaderLeftNavProps) => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {(!hideNav || !hideSearch) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {!hideNav && (isMdBreakpoint ? <BrowseMenu /> : <PageHeaderMenu />)}
          {!hideSearch && <HeaderSearch />}
        </div>
      )}
    </>
  );
};

export default PageHeaderLeftNav;
