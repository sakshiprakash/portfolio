import Header from "@/component/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sakshi | Personal Portfolio",
  description:
    "Sakshi Prakash is a full stack engineer with 3 years of experiance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#08101e] text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
