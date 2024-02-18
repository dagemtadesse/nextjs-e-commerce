
import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { AppThemeProvider } from "./_components/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Skill Assessment",
  description: "Made by Dagem Tadesse(dagem.seyfu@gmail.com)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <AppThemeProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
        <CssBaseline />
      </AppThemeProvider>
    </html>
  );
}
