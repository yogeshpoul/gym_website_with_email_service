import React from "react";

const sizes = {
  xs: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
  s: "text-4xl font-medium md:text-[34px] sm:text-[32px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
