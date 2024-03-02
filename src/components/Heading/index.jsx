import React from "react";
import { headingSize } from "../../constants.js";

const Heading = ({ children, className="", size = "md", as, ...restProps }) => {
  const Component = as || h6;
  return (
    <Component className={`text-black-900 font-sourcesanspro ${className} ${headingSize[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
