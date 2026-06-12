import type { Route } from "./+types/layout";
import style from "css/layout.module.css";
import { Link, NavLink, Outlet } from "react-router";
import { links } from "~/data/links";

export const Header = () => {
  return (
    <header className={style["header"]}>
      <Link to="#main-content" reloadDocument>Skip to main content</Link>
      <nav>
        <Link to="/">
          <img src="/favicon.ico" alt="Blazium Logo" height={24} width={24} />
          <span>Blazium</span>
        </Link>
        <div>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/from-godot">From Godot</NavLink>
        </div>
      </nav>
      <nav>
        <Link to={links.documentation}>Documentation</Link>
      </nav>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <nav>
        <div>
          <h2>Get started</h2>
          <Link to="/download">Download</Link>
          <Link to="/features">Features</Link>
          <Link to="/from-godot">From Godot</Link>
          <Link to={links.documentation}>Documentation</Link>
          <Link to="/changelog">Changelog</Link>
        </div>
        <div>
          <h2>Resources</h2>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/developers">Developers</Link>
          <Link to="/press-kit">Press Kit</Link>
          <Link to="/license">License</Link>
        </div>
        <div>
          <h2>Follow us</h2>
          <Link to="/chat">Discord</Link>
          <Link to={links.github}>GitHub</Link>
          <Link to={links.indiedb}>IndieDB</Link>
          <Link to={links.twitter}>X/Twitter</Link>
          <Link to={links.youtube}>YouTube</Link>
          <Link to={links.itchio}>itch.io</Link>
        </div>
      </nav>
      <small>&copy; 2024-{new Date().getFullYear()} Blazium Games & contributors.</small>
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