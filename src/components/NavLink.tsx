import { Link as LinkScroll } from "react-scroll";

interface NavLinkProps {
  title: string;
  to: string;
}

const NavLink = ({ title, to }: NavLinkProps) => (
  <LinkScroll
    to={to}
    offset={-100}
    spy
    smooth
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
);

export default NavLink;
