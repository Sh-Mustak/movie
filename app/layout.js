import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/components/provider/AuthProvider";
import SearchProvider from "@/components/provider/SearchProvider";
import { headers } from "next/headers";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MovieDb",
  description: "Movie Website using Nexjs",
};

export default function RootLayout({ children }) {
  const header = headers();
  return (
    <html lang="en">
      <body
        className={"bg-black text-white"}
      >
        <AuthProvider>
          <SearchProvider>
            <Navbar />
            {children}
          </SearchProvider>
        </AuthProvider>


      </body>
    </html>
  );
}
