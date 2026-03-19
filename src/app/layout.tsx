export const metadata = {
  title: "ワンダフ - ミスを見れば、うまくなる。",
  description: "ゴルフのミスを記録してスコアアップにつなげるPWA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
