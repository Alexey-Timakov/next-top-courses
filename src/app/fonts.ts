import { Noto_Sans_KR as NotoSans } from "next/font/google";

export const notoSans = NotoSans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  // variable: "--font-noto-sans"
});