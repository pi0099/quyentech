import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { navLinks, services, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030510]">
      <FooterGradient />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Logo variant="footer" showText />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Liên kết">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Dịch vụ">
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Liên hệ">
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} QuyenTech. All rights reserved.</p>
          <p className="text-slate-600">Engineered in Vietnam</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGradient() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-display font-semibold text-white mb-4">{title}</h4>
      {children}
    </div>
  );
}
