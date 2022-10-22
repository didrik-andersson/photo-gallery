import { useCallback, useState } from "react";
import useMounted from "./use-mounted";

const useToggle = (initialValue) => {
  const isMounted = useMounted();
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    if (isMounted()) {
      setValue((prev) => !prev);
    }
  }, []);

  return [value, toggle, setValue ];
};

export default useToggle;
