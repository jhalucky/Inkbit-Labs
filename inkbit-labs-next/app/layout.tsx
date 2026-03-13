import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inkbit Labs — Print That Speaks for Your Brand",
  description:
    "Inkbit Labs is a premium printing press startup offering business cards, product tags, labels, flyers, packaging, and custom print solutions.",
  keywords: "printing press, business cards, labels, stickers, packaging, flyers, brochures, custom printing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
