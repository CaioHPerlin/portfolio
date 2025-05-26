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
      after:block after:content-[''] after:border-b-2 after:border-accent
      after:scale-x-0 after:transition-transform after:duration-150 
      after:ease-in-out hover:after:scale-x-100
          ${isActive ? "" : "opacity-80"}
      `}
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="py-6 fixed top-0 z-10 bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-md w-full border-b-1 border-secondary/30">
      <nav className="flex flex-row gap-8 w-[45rem] mx-auto opacity-100 hover:[&>*]:opacity-80 transition-opacity">
        {/* 
        
        background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
        */}
        <CustomLink to="/">Myself</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </header>
  );
}
