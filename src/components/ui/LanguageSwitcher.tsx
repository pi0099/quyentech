"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: Locale) => {
    if (next === locale) return;

    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const nextPath = segments.join("/") || `/${next}`;
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    router.push(nextPath);
  };

  return (
    <div className={cn("flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10", className)}>
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLocale(l)}
          className={cn(
            "px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
            locale === l
              ? "bg-cyan-500/20 text-cyan-300"
              : "text-slate-500 hover:text-slate-300"
          )}
          aria-label={l === "vi" ? "Tiếng Việt" : "English"}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
