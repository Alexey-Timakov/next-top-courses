import type { Metadata } from "next";
import "./globals.scss";
import { notoSans } from "./fonts";
import { Footer, Header, Sidebar } from "@/layout";
import { MenuContextProvider } from "@/context/menu.context";
import { fetchWholeMenu } from "@/api/fetchMenu";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Nextjs app",
    default: "MyTop - tourses top"
  },
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const wholeMenu = await fetchWholeMenu();

  if (!wholeMenu) {
    return notFound();
  }

  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <div className="layout md:layout-main grid grid-rows-main grid-cols-layout-mobile md:grid-cols-layout-main gap-x-12 gap-y-16 min-h-screen">
          <MenuContextProvider wholeMenu={wholeMenu || {}}>
            <Header className="header block md:hidden" />
            <Sidebar className="sidebar hidden md:grid" />
          </MenuContextProvider>
          <div className="site-content p-6 lg:p-0">
            {children}
          </div>
          <Footer className="footer px-14 py-10 grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-footer-main" />
        </div>
      </body>
    </html>
  );
};