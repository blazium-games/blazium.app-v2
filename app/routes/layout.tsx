import type { Route } from "./+types/layout";
import style from "css/layout.module.css";
import { Outlet, Link, NavLink } from "react-router";
import { links } from "~/data/links";
import { DEVENV, GITHUB_PAGES } from "~/env";
import { IoMenu, IoClose } from "react-icons/io5";
import { publicAsset } from "~/lib/publicAsset";

const logoSrc = publicAsset("/images/Brand Kit/Logo/SVG/Blazium_Logo.svg");

export const Header = () => {
  return (
    <header className={style["header"]}>
      <Link to="#main-content" reloadDocument>Skip to main content</Link>
      <nav>
        <Link to="/">
          <img src={logoSrc} alt="Blazium Logo" height={24} width={24} />
          <span>Blazium</span>
        </Link>
        <div>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/from-godot">From Godot</NavLink>
          <NavLink to="/news">News</NavLink>
        </div>
      </nav>
      <nav>
        <Link to={links.documentation}>Documentation</Link>
      </nav>
      <button className="secondary" popoverTarget="mobile-menu" popoverTargetAction="show">
        <IoMenu />
      </button>
      <dialog id="mobile-menu" popover="manual">
        <button className="secondary" popoverTarget="mobile-menu" popoverTargetAction="hide">
          <IoClose />
        </button>
        <nav>
          <Link to="/">
            <img src={logoSrc} alt="Blazium Logo" height={24} width={24} />
            <span>Blazium</span>
          </Link>
          <hr />
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/from-godot">From Godot</NavLink>
          <NavLink to="/news">News</NavLink>
        </nav>
        <hr />
        <nav>
          <span>Learn More</span>
          <Link to={links.documentation}>Documentation</Link>
          <Link to="/chat">Discord</Link>
          <Link to={links.twitter}>X/Twitter</Link>
          <Link to={links.github}>GitHub</Link>
          <Link to="/developers">Developers</Link>
          <Link to="/changelog">Changelog</Link>
        </nav>
      </dialog>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <nav>
        <div>
          <h2>Get Started</h2>
          <Link to="/download">Download</Link>
          <Link to="/features">Features</Link>
          <Link to="/from-godot">From Godot</Link>
          <Link to="/changelog">Changelog</Link>
        </div>
        <div>
          <h2>Resources</h2>
          <Link to={links.documentation}>Documentation</Link>
          <Link to="/news">News</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/developers">Developers</Link>
          <Link to="/brand-kit">Brand Kit</Link>
        </div>
        <div>
          <h2>Follow Us</h2>
          <Link to="/chat">Discord</Link>
          <Link to={links.github}>GitHub</Link>
          <Link to={links.indiedb}>IndieDB</Link>
          <Link to={links.twitter}>X/Twitter</Link>
          <Link to={links.youtube}>YouTube</Link>
          <Link to={links.itchio}>itch.io</Link>
        </div>
      </nav>
      <small>
        {DEVENV ? "DEV" : GITHUB_PAGES ? "GH_PAGES" : "PROD"}
        {" | "}
        MIT 2024-{new Date().getFullYear()} Blazium Games & contributors.
      </small>
    </footer>
  )
}

export default ({ }: Route.ComponentProps) => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}