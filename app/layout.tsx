import type { Metadata } from \"next\";
import { Inter } from \"next/font/google\";
import Script from \"next/script\";
import \"./globals.css\";

const inter = Inter({ subsets: [\"latin\"] });

export const metadata: Metadata = {
  title: \"StackDuel | SaaS Comparisons & Best Tools\",
  description: \"Compare the best SaaS tools side by side and find the perfect stack for your business.\",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang=\"en\">
      <head>
        <Script 
          async 
          src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5995172189982724\" 
          crossOrigin=\"anonymous\"
          strategy=\"beforeInteractive\"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}