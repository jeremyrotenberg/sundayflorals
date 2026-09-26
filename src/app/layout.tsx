import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunday Florals — Flowers, Configured By You",
  description:
    "Sunday Florals is a direct-to-consumer flower studio with client-driven personalization, same-day delivery, and an interactive bouquet configurator.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
