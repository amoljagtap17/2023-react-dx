import { Footer, Header } from "@/components/sections";
import { AuthProvider, QueryProvider } from "@/lib/components";
import { ThemeRegistry } from "@/lib/mui";
import { Box } from "@mui/material";
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
          <QueryProvider>
            <AuthProvider>
              <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Box flexGrow={1}>{children}</Box>
                <Footer />
              </Box>
            </AuthProvider>
          </QueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
