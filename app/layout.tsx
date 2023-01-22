import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="h-screen bg-gray-900">
        <div className="mx-auto w-4/5 py-5 text-white">{children}</div>
      </body>
    </html>
  );
}
