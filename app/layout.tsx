import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASCII Cam — Next.js Expo",
  description: "Ejemplo en Next.js para Topicos Avanzados de P. Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="scanline">{children}</body>
    </html>
  );
}
