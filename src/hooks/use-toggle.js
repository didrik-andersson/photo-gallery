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

  const unset = useCallback(() => {
    setValue(false);
  }, []);

  const set = useCallback(() => {
    setValue(true);
  }, []);

  return [value, toggle, setValue, unset, set];
};

export default useToggle;
