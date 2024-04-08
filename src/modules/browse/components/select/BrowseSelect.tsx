/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import Select from "../../../../forms/Select/Select";
import SelectOption from "../../../../forms/Select/SelectOption/SelectOption";
import { BROWSE_ROUTES, BrowseRouteNamesValues } from "../../constants/routes";
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import getBrowseSelectCss from "./getBrowseSelectCss";

type Props = {
  routeName: BrowseRouteNamesValues;
  renderRouteLabel?: ((value: any) => React.ReactNode) | undefined;
};

const BrowseSelect: React.FC<Props> = ({ routeName, renderRouteLabel }) => {
  const theme = useTheme();
  const styled = getBrowseSelectCss(theme);

  return (
    <ClassNames>
      {({ css }) => (
        <Select
          variant="standard"
          classes={{
            select: css`
              ${styled.select}
            `,
          }}
          value={routeName}
          renderValue={renderRouteLabel}
        >
          {BROWSE_ROUTES.map((route) => (
            <SelectOption key={route.label} value={route.value} iconDisabled>
              <Link to={route.href} css={styled.selectOptionLink}>
                {route.label}
              </Link>
            </SelectOption>
          ))}
        </Select>
      )}
    </ClassNames>
  );
};

export default BrowseSelect;
