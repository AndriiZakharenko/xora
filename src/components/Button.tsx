import clsx from "clsx";
import ButtonInner from "./ButtonInner";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  icon?: string;
  children: ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  markerFill?: string;
}

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: ButtonProps) => {
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <ButtonInner icon={icon} markerFill={markerFill}>
        {children}
      </ButtonInner>
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <ButtonInner icon={icon} markerFill={markerFill}>
        {children}
      </ButtonInner>
    </button>
  );
};

export default Button;
