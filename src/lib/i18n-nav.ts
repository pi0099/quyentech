import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

export function localizedPath(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("#")) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export function getNavLinks(t: Dictionary) {
  return [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ] as const;
}
