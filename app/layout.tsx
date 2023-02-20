export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
            <h1>My To DO Application</h1>
            {children}
        </body>
    </html>
  );
}
