import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--next-nunito",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const roboto = Roboto_Condensed({
  variable: "--next-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dakingo | Cakes, Desserts & Celebrations",
  description:
    "Dakingo — fresh, delicious cakes and desserts for every celebration.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
