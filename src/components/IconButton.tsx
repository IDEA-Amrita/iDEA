import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "../utils/classNames";
import styles from "./IconButton.module.css";

interface IconButtonProps extends PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> {
  "aria-label": string;
}

export default function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
