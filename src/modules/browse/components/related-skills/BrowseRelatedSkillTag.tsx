import React from "react";
import Button from "../../../../Button/Button";

type Props = {
  href: string;
  label: string;
};

const BrowseRelatedSkillTag: React.FC<Props> = ({ href, label }) => {
  return (
    <Button variant="ghost" color="navy" href={href}>
      {label}
    </Button>
  );
};

export default BrowseRelatedSkillTag;
