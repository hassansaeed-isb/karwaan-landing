import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Karvaan - Run Your Travel Business, Not Your Excel Sheets",
  description: "Save time, get clarity, and grow your travel agency with automated operations. Manage clients, vendors, payments, and get instant insights with Karvaan.",
  keywords: "travel agency software, travel business management, client management, vendor payments, travel automation",
  authors: [{ name: "Karvaan Team" }],
  openGraph: {
    title: "Karvaan - Run Your Travel Business, Not Your Excel Sheets",
    description: "Save time, get clarity, and grow your travel agency with automated operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
