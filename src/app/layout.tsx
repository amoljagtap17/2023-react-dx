import { AuthProvider } from "@/lib/components";
import { ThemeRegistry } from "@/lib/mui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Developer Experience",
  description: "Code faster with React",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://reactdx.com",
    siteName: "React Developer Experience",
    images: [
      {
        url: "https://reactdx.com/og.png",
        width: 1200,
        height: 630,
        alt: "React Developer Experience",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthProvider>{children}</AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
