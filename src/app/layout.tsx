import type { Metadata } from "next";
import Body from "@/src/components/layout/Body";
import { ThemeProvider } from "../contexts/ThemeContext";

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
