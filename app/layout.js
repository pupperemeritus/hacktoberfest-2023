import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Hacktoberfest'23 | COSC",
  description: "CBIT Hacktoberfest Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_mono.className}>{children}</body>
    </html>
  );
}
