import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "./header/PageHeader";
import HomeRouteNames from "../../home/constants/routes";
import PageFooter from "./footer/PageFooter";

const PageLayout = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[1];

  return (
    <>
      <PageHeader isHomePage={page === HomeRouteNames.HOME} />
      <Outlet />
      <PageFooter />
    </>
  );
};

export default PageLayout;
