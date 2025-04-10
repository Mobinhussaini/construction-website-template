
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BannerSection from "@/components/banner-section";
import HeaderPage from "./header/page";
import FooterPage from "./footer/page";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        template:"%s | Global Gate Group Company",
        default:"Global Gate Group Company"
    },
    description: "Global Gate Grou Company",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <BannerSection />
                <HeaderPage />
                {children}
                <FooterPage />
            </body>
        </html>
    );
}
