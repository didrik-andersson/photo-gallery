import { useContext } from "react";

export default function useCtx(context) {
  const ctx = useContext(context);

  if (ctx === undefined) {
    throw new Error("Context is undefined");
  }

  return ctx;
}
