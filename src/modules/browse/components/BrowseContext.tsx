import React from "react";
import { BrowseRouteNamesValues } from "../constants/routes";

type BrowseContextProps = {
  routeName: BrowseRouteNamesValues;
  updateRouteName?: (routeName: BrowseRouteNamesValues) => void;
};

const BrowseContext = React.createContext<BrowseContextProps>({
  routeName: "all-classes",
});

const useBrowseContext = () => {
  return React.useContext(BrowseContext);
};

export default BrowseContext;

export { useBrowseContext };
