import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Bigliardi Vicente | Desenvolvedor Full-Stack Junior",
  description: "Portfólio pessoal de Lucas Bigliardi Vicente, Desenvolvedor Full-Stack Junior. Projetos, experiências e habilidades em Java, Spring Boot, TypeScript, React e Next.js.",
  keywords: ["Lucas Bigliardi Vicente", "Desenvolvedor Full-Stack", "Desenvolvedor Junior", "Java", "Spring Boot", "React", "Next.js", "TypeScript", "Portfólio"],
  authors: [{ name: "Lucas Bigliardi Vicente" }],
  creator: "Lucas Bigliardi Vicente",
  openGraph: {
    title: "Lucas Bigliardi Vicente | Desenvolvedor Full-Stack Junior",
    description: "Portfólio pessoal de Lucas Bigliardi Vicente. Conheça meus projetos, formação e competências técnicas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-zinc-950 text-zinc-100 font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
