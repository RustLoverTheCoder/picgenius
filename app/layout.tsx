import "./globals.css";
import HomeLayout from "@/components/layout";

export const metadata = {
  title: "将您的想法变成艺术 | PicGenius",
  description: "一个创造和分享ai艺术的地方",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-hans">
      <body className="bg-base-100 text-white">
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
