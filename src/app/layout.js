import { Inter } from "next/font/google";
import '@mantine/core/styles.css'; 
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArrowFlicks - Dmitry Shulzhytski",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
