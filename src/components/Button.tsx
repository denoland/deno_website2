import React from "react";
import { InternalLink } from "./Link";
import { Button as MaterialButton } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button/Button";

interface Props {
  /** Supports both internal and external links */
  to?: string;
  component?: any;
  /** Do not use href. Use <Button to="link" > instead for both internal and external links */
  href?: never;
}

export const Button: React.FC<Props & ButtonProps> = props => {
  let { to, ...rest } = props;
  if (!props.to) {
    return <MaterialButton {...props} />;
  } else if (props.to.indexOf("://") === -1) {
    return <MaterialButton component={InternalLink} {...props} />;
  } else {
    return <MaterialButton {...rest} href={to} />;
  }
};
