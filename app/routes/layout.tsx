import type { Route } from "./+types/layout";
import style from "css/layout.module.css";
import { Outlet } from "react-router";
import { AppLink, AppNavLink } from "comps/AppLink";
import { links } from "~/data/links";
import { publicAsset } from "~/lib/publicAsset";
import { DEVENV, GITHUB_PAGES } from "~/env";

const logoSrc = publicAsset("images/Brand Kit/Logo/SVG/Blazium_Logo.svg");

export const Header = () => {
  return (
    <header className={style["header"]}>
      <AppLink to="#main-content" reloadDocument>Skip to main content</AppLink>
      <nav>
        <AppLink to="/">
          <img src={logoSrc} alt="Blazium Logo" height={24} width={24} />
          <span>Blazium</span>
        </AppLink>
        <div>
          <AppNavLink to="/download">Download</AppNavLink>
          <AppNavLink to="/features">Features</AppNavLink>
          <AppNavLink to="/from-godot">From Godot</AppNavLink>
        </div>
      </nav>
      <nav>
        <AppLink to={links.documentation}>Documentation</AppLink>
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
          <AppLink to="/download">Download</AppLink>
          <AppLink to="/features">Features</AppLink>
          <AppLink to="/from-godot">From Godot</AppLink>
          <AppLink to={links.documentation}>Documentation</AppLink>
          <AppLink to="/changelog">Changelog</AppLink>
        </div>
        <div>
          <h2>Resources</h2>
          <AppLink to="/privacy-policy">Privacy Policy</AppLink>
          <AppLink to="/sponsors">Sponsors</AppLink>
          <AppLink to="/developers">Developers</AppLink>
          <AppLink to="/press-kit">Press Kit</AppLink>
          <AppLink to="/license">License</AppLink>
        </div>
        <div>
          <h2>Follow us</h2>
          <AppLink to="/chat">Discord</AppLink>
          <AppLink to={links.github}>GitHub</AppLink>
          <AppLink to={links.indiedb}>IndieDB</AppLink>
          <AppLink to={links.twitter}>X/Twitter</AppLink>
          <AppLink to={links.youtube}>YouTube</AppLink>
          <AppLink to={links.itchio}>itch.io</AppLink>
        </div>
      </nav>
      <section>
        <small>
          {DEVENV ? "DEV" : GITHUB_PAGES ? "GH_PAGES" : "PROD"}
          {" | "}
          &copy; 2024-{new Date().getFullYear()} Blazium Games & contributors.
        </small>
      </section>
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