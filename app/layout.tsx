import type { Metadata } from "next";
import "./styles/globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
import Body from "./components/layout/Body";

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
    <html lang="en">
      <ThemeProvider>
        <Body>{children}</Body>
      </ThemeProvider>
    </html>
  );
}
