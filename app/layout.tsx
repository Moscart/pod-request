import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Pod Request",
  description: "Generated by create next app",
};

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.className} antialiased`}>
        {children}
        <div className="hidden md:block">
          <Toaster richColors closeButton />
        </div>
        <div className="md:hidden">
          <Toaster richColors closeButton position="top-center" />
        </div>
      </body>
    </html>
  );
}
