import React, { PropsWithChildren } from "react";

type ClassRatingListContextProps = {
  /**
   * The id of the class rating list.
   */
  id: string;
} | null;

const Context = React.createContext<ClassRatingListContextProps>(null);

type Props = PropsWithChildren & { id: string };

const ClassRatingListContext: React.FC<Props> = ({ children, id }) => {
  const context = React.useMemo(() => {
    return { id };
  }, [id]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useClassRatingListContext = () => {
  return React.useContext(Context);
};

export const getClassRatingItemLabelId = (
  classRatingListId: string,
  ratingCategory: string
) => {
  return `${classRatingListId}-${ratingCategory
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};

export default ClassRatingListContext;
