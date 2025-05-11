import type { Metadata } from "next";
import "./styles/globals.css";
import Body from "./components/Body";
import { ThemeProvider } from './contexts/ThemeContext';

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
