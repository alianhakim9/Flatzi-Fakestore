import { Inter } from "next/font/google";
import StoreProvider from "../providers/store-provider";
import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flatzi Fakestore",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-sm mx-auto`}>
        <Toaster position="top-center" />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}