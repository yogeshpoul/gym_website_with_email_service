import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
  },
};
const sizes = {
  xs: "h-[47px] pl-[15px] pr-[35px] text-4xl",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      console.log(e.target.value);
      if (onChange) onChange(e?.target?.value) ;
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-black-900 text-4xl font-thin  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_100_01", "blue_gray_100"]),
};

export { Input };
