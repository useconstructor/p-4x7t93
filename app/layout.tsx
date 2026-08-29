import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata: Metadata = {
  title: 'Stripe | Financial Infrastructure to Grow Your Revenue',
  description: 'Stripe is a financial services platform that helps all types of businesses accept payments, build flexible billing models, and manage money movement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
