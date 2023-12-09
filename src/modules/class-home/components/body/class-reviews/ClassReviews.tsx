/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Tab from "../../../../../tabs/Tab/Tab";
import TabPanel from "../../../../../tabs/TabPanel/TabPanel";
import Tabs from "../../../../../tabs/Tabs/Tabs";
import TabsContext from "../../../../../tabs/Tabs/TabsContext";
import ClassReviewItem from "./ClassReviewItem";
import ClassReviewList from "./ClassReviewList";
import React from "react";
import getClassReviewsCss from "./__styles__/getClassReviewsCss";
import ExpandableContainer from "../../../../../ExpandableContainer/ExpandableContainer";

type Props = {
  theme: Theme;
};

const ClassReviews: React.FC<Props> = ({ theme }) => {
  const css = getClassReviewsCss(theme);

  return (
    <ExpandableContainer css={css} overlayColor="white">
      <TabsContext value="highest-rated">
        <Tabs aria-label="class-reviews">
          <Tab label="Highest Rated" value="highest-rated" />
          <Tab label="Lowest Rated" value="lowest-rated" />
          <Tab label="Most Recent" value="most-recent" />
        </Tabs>
        <TabPanel value="highest-rated">
          <ClassReviewList theme={theme}>
            <ClassReviewItem theme={theme} />
          </ClassReviewList>
        </TabPanel>
      </TabsContext>
    </ExpandableContainer>
  );
};

export default ClassReviews;
