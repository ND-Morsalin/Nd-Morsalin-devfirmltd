import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/shared/sidebar/sidebar";
import Header from "@/components/shared/header/header";

const poppins = Poppins({
  subsets: ["latin-ext", "devanagari"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev Firm - Invoice App",
  description: "This is a test project to test Nd Morsalin skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body className={` ${poppins.className} bg-[#f1f5f9] p-6`}>
        <div className="flex gap-5">
          <Sidebar />

          <main className="w-full overflow-x-auto">
            {/* here is header come */}
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
