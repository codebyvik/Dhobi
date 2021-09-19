import { useEffect } from "react";

export default function Title(title) {
  useEffect(
    () => {
      document.title = `${title} - Shopi`;
    },
    // eslint-disable-next-line
    [title]
  );
}
