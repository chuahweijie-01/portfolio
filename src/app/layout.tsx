import type { Metadata } from "next";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import '@/src/styles/globals.css';

export const metadata: Metadata = {
  title: "dev",
  description: "Something about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`transition duration-150 px-7 lg:px-50 bg-white dark:bg-zinc-900`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </body>
      </html>
      <Footer />
    </>
  );
}
