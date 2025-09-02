/// <reference types="vite/client" />
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cap-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        theme?: string;
        token?: string;
      };
    }
  }
}
