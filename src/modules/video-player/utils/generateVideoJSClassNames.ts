import _ from "lodash";

const generateVideoJSClassNames = <T extends string>(
  ids: Array<T>
): { classes: Record<T, string>; classNames: Record<T, string> } => {
  const getFormattedClassName = (id: string) => `vjs-${id}`;

  const classes = _.reduce(
    ids,
    (result, id) => {
      result[id] = getFormattedClassName(id);
      return result;
    },
    {} as Record<T, string>
  );

  const classNames = _.reduce(
    ids,
    (result, id) => {
      result[id] = `.${getFormattedClassName(id)}`;
      return result;
    },
    {} as Record<T, string>
  );

  return { classes, classNames };
};

export default generateVideoJSClassNames;
