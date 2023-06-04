import { useState } from "react";
import { useEffect } from "react";

export const dataColors = [
  "208D8E",
  "78C6B0",
  "76BC86",
  "80DC69",
  "E46161",
  "E17E80",
  "EC8182",
  "F3C567",
  "E57A57",
  "F1A25C",
];

export function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, [key, setValue]);

  return [
    value,
    (v) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
  ];
}
