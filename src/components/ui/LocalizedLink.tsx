"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/contexts/LocaleContext";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useLocale();

  const localizedHref =
    href.startsWith("http") || href.startsWith("#")
      ? href
      : href === "/"
        ? `/${locale}`
        : `/${locale}${href}`;

  return <Link href={localizedHref} {...props} />;
}
