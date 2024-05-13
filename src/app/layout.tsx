import type { Metadata } from "next";
import "./globals.scss";
import { notoSans } from "./fonts";
import { Footer, Header, Sidebar } from "@/layout";

export const metadata: Metadata = {
  title: {
    template: "%s | Nextjs app",
    default: "MyTop - tourses top"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <div className="layout md:layout-main grid grid-rows-main grid-cols-layout-mobile md:grid-cols-layout-main gap-x-12 min-h-screen">
          <Header className="header block md:hidden" />
          <Sidebar className="sidebar hidden md:block" />
          <div className="site-content">
            {children}
          </div>
          <Footer className="footer px-14 py-10 grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-footer-main" />
        </div>
      </body>
    </html>
  );
};