import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samimhosen.vercel.app"),
  title: "Md Samim Hosen | Software Engineer & Full Stack Developer",
  description:
    "Software Engineer and Full Stack Developer at JEVXO specializing in Next.js, TypeScript, PostgreSQL, Prisma ORM, and high-performance web applications.",
  keywords: [
    "Md Samim Hosen",
    "Samim Hosen",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js",
    "PostgreSQL",
    "Prisma ORM",
    "JEVXO",
    "Web Developer Bangladesh",
    "Software Engineer",
  ],
  authors: [{ name: "Md Samim Hosen", url: "https://samimhosen.vercel.app" }],
  creator: "Md Samim Hosen",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/samim.png",
    shortcut: "/samim.png",
    apple: "/samim.png",
  },
  openGraph: {
    title: "Md Samim Hosen | Full Stack Developer",
    description:
      "Full Stack Developer at JEVXO building scalable web applications with Next.js, TypeScript, PostgreSQL, and Prisma ORM.",
    url: "https://samimhosen.vercel.app",
    siteName: "Md Samim Hosen Portfolio",
    images: [
      {
        url: "/desktop-preview.png",
        width: 1200,
        height: 630,
        alt: "Md Samim Hosen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Samim Hosen | Full Stack Developer",
    description: "Full Stack Developer at JEVXO building scalable web applications.",
    images: ["/desktop-preview.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('site-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} font-sans min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500/20 selection:text-blue-500 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
