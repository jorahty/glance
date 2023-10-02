import type { Metadata } from 'next';

import Theme from '@/components/Theme';

export const metadata: Metadata = {
  title: 'Glance',
  description: 'An organization tool.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
