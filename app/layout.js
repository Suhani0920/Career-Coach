import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/header";
import { dark } from "@clerk/themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*Header*/}
            <Header>
              
            </Header>
            <main className="min-h-screen">
               {children}
            </main>

            {/*Footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with love for you</p>
              </div>
            </footer>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
