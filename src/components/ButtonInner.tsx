import { Marker } from "./Marker";
import { ReactNode } from "react";

interface ButtonInnerProps {
  icon?: string;
  children: ReactNode;
  markerFill?: string;
}

const ButtonInner = ({ icon, children, markerFill }: ButtonInnerProps) => (
  <>
    <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
      <span className="absolute -left-[1px]">
        <Marker fill={markerFill} />
      </span>

      {icon && (
        <img
          src={icon}
          alt="circle"
          className="size-10 mr-5 object-contain z-10"
        />
      )}

      <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
        {children}
      </span>
    </span>

    <span className="glow-before glow-after" />
  </>
);

export default ButtonInner;
