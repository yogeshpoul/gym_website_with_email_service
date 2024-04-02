import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[23px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    amber_600: "bg-amber-600 text-black-900",
    lime_800: "bg-lime-800 text-white-A700",
  },
};
const sizes = {
  xs: "h-[47px] px-[35px] text-4xl",
  sm: "h-[65px] px-[21px] text-4xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "lime_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-4xl ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["amber_600", "lime_800"]),
};

export { Button };
