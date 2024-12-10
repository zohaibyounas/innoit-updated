import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/app/modules/components/layout/Header";
import Footer from "@/app/modules/components/layout/Footer";
import ScrollProgress from "@/app/modules/components/layout/ScrollProgress";
import CustomScripts from "@/app/modules/scripts/CustomScripts";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INNOIT | Business Software solution",
  description:
    "Your Gateway to cutting-edge ERP technology with SAP Business One, Innovative Web Solutions and Cloud Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-mobile-nav-style="full-screen-menu"
        data-mobile-nav-bg-color=""
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollProgress />
        <CustomScripts />
      </body>
    </html>
  );
}
