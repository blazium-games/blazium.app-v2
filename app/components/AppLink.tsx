import { Link, NavLink, type LinkProps, type NavLinkProps } from "react-router";
import { GITHUB_PAGES } from "~/env";

function isInternalPath(to: LinkProps["to"]): boolean {
  if (typeof to !== "string") return false;
  return to.startsWith("/") && !to.startsWith("//");
}

function pagesReload(reloadDocument: boolean | undefined, to: LinkProps["to"]): boolean | undefined {
  if (reloadDocument !== undefined) return reloadDocument;
  return GITHUB_PAGES && isInternalPath(to) ? true : undefined;
}

export function AppLink({ to, reloadDocument, ...props }: LinkProps) {
  return <Link to={to} reloadDocument={pagesReload(reloadDocument, to)} {...props} />;
}

export function AppNavLink({ to, reloadDocument, ...props }: NavLinkProps) {
  return <NavLink to={to} reloadDocument={pagesReload(reloadDocument, to)} {...props} />;
}
