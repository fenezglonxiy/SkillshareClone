import { useId as useReactId } from "react";

const useId = (idFromProps?: string): string | undefined => {
  const id = useReactId();

  if (idFromProps) {
    return idFromProps;
  }

  if (!id) {
    return undefined;
  }

  return `cds-${id}`;
};

export default useId;
