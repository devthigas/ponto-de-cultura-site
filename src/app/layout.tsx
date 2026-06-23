import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ponto de Cultura Kombinação | Arte, Cultura e Inclusão Social em Canela, RS",
  description: "O Ponto de Cultura Kombinação promove inclusão social e formação artística em Canela e Gramado, RS através de oficinas gratuitas de música, circo, teatro e artesanato.",
  keywords: "ong, ponto de cultura, kombinação, canela, gramado, rio grande do sul, oficinas gratuitas, circo, música, teatro, artesanato, fuxico das bunitas, inclusão social, instituto seide",
  authors: [{ name: "Instituto SEIDE" }],
  openGraph: {
    type: "website",
    title: "Ponto de Cultura Kombinação | Arte, Cultura e Inclusão Social",
    description: "Formação artística e inclusão social em Canela e Gramado, RS através de oficinas gratuitas. Venha conhecer nosso movimento!",
    images: [{ url: "/assets/kombi_cultural.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-background text-ink font-sans antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
