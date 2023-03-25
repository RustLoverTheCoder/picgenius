import './globals.css'

export const metadata = {
  title: '将您的想法变成艺术 | PicGenius',
  description: '让AI将您的想法变成艺术',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-hans">
      <body>{children}</body>
    </html>
  )
}
