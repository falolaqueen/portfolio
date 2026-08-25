// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import CursorGlow from "../component/CursorGlow";


export const metadata = {
  title: "Queen | Creative Developer",
  description: "Queen's Portfolio | Developer, Designer, Professional Overthinker.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {/* <div className="noise" /> */}
          <CursorGlow />

          <Navbar />

          {children}
      </body>
    </html>
  );
}
