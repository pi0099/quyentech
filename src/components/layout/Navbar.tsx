"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "@/contexts/LocaleContext";
import { getNavLinks } from "@/lib/i18n-nav";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations();
  const navLinks = getNavLinks(t);
  const scrolled = useThrottledScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 will-change-transform",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl",
          "transition-[padding,background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "py-3 px-6 bg-[#050816]/90 border border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border border-transparent"
        )}
      >
        <Logo variant="navbar" />

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <LocalizedLink
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </LocalizedLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button href="/contact" variant="primary" size="sm">
            {t.nav.cta}
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-6 mt-2 rounded-2xl overflow-hidden bg-[#050816]/95 border border-white/10"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    href={link.href}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  {t.nav.cta}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
