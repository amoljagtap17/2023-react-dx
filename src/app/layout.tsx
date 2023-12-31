import { Footer, Header } from "@/components/sections";
import {
  AuthProvider,
  QueryProvider,
  SnackbarProvider,
} from "@/lib/components";
import { ThemeRegistry } from "@/lib/mui";
import { Box, Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Developer Experience",
  description: "Code faster with React",
  /* openGraph: {
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
  }, */
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
              <SnackbarProvider>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                  <Header />
                  <Box flexGrow={1}>
                    <Container maxWidth="lg">{children}</Container>
                  </Box>
                  <Footer />
                </Box>
              </SnackbarProvider>
            </AuthProvider>
          </QueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
