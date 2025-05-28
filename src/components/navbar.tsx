import { NavLink, type NavLinkProps } from "react-router";

interface CustomLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
      ease-in-out text-xl tracking-wide transition-opacity
      hover:opacity-100!
      after:block after:content-[''] after:border-b-1 after:border-accent
      after:scale-x-0 after:transition-transform after:duration-150 
      after:ease-in-out hover:after:scale-x-100!
          ${isActive ? "after:scale-x-100" : "opacity-80"}
      `}
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="py-6 fixed top-0 z-10 bg-secondary/20 backdrop-blur-md w-full border-b-1 border-accent/20">
      <nav className="flex flex-row gap-8 w-[80rem] mx-auto opacity-100 hover:[&>*]:opacity-80 hover:[&>*]:after:scale-x-0 transition-opacity">
        <CustomLink to="/">Myself</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </header>
  );
}
