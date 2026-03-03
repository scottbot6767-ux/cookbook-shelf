import './globals.css';

export const metadata = {
  title: 'Family Cookbook Shelf',
  description: 'A shared, interactive cookbook collection for family & friends',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full bg-gray-50 flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
