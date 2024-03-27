import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create - Pack it up',
  description: 'Create a list of items you need to bring for your adventure',
};

export default function CreateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
