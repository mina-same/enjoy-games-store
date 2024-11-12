import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import './globals.css';
import Image from 'next/image';
import Head from 'next/head'; // Import Head for metadata
import cricle from '@/public/cricle.png';

export const metadata = {
  title: 'Enjoy Games',
  description: 'Store',
  image: "../public/svg/logo.svg", // Path to the logo image for sharing
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff]">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className="relative">
        <ModalProvider />
        <ToastProvider />
        <Image src={cricle} alt="circle" className="absolute -top-20 right-6 rotate-90 z-0" />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
