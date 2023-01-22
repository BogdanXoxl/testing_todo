import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="h-screen bg-secondary">
        <div className="container mx-auto w-4/5 py-5 text-white selection:bg-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
