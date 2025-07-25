import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata = {
    title: "Tina's Portfolio",
    description: "Tina Nguyen's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${cormorant.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
