

export const metadata = {
  title: 'Instagram',
  description: 'Login to app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
