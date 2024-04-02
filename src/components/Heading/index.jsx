import React from "react";

const sizes = {
  xl: "text-8xl font-bold md:text-5xl",
  s: "text-4xl font-extrabold md:text-[34px] sm:text-[32px]",
  md: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-2xl font-extrabold md:text-[22px]",
  lg: "text-[55px] font-extrabold md:text-[47px] sm:text-[41px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
