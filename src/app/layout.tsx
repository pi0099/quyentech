import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "QuyenTech — Công nghệ thúc đẩy doanh nghiệp",
    template: "%s | QuyenTech",
  },
  description:
    "QuyenTech — đối tác công nghệ cao cấp cho phần mềm tùy chỉnh, website, SEO và giải pháp AI tại Việt Nam.",
  keywords: [
    "phát triển phần mềm",
    "thiết kế website",
    "SEO",
    "AI automation",
    "công ty công nghệ Việt Nam",
    "QuyenTech",
  ],
  openGraph: {
    title: "QuyenTech — Công nghệ thúc đẩy doanh nghiệp",
    description:
      "Đối tác công nghệ cao cấp cho phần mềm, website, SEO và AI tại Việt Nam.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${beVietnam.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#050816] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
