import _ from "lodash";

const generateEmotionClassNames = <T extends string>(
  componentName: string,
  ids: Array<T>
): { classes: Record<T, string>; classNames: Record<T, string> } => {
  const getFormattedClassName = (componentName: string, id: string) =>
    `ss-${componentName}-${id}`;

  const classes = _.reduce(
    ids,
    (result, id) => {
      result[id] = getFormattedClassName(componentName, id);
      return result;
    },
    {} as Record<T, string>
  );

  const classNames = _.reduce(
    ids,
    (result, id) => {
      result[id] = `.${getFormattedClassName(componentName, id)}`;
      return result;
    },
    {} as Record<T, string>
  );

  return { classes, classNames };
};

export default generateEmotionClassNames;
