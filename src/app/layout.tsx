export const metadata = {
  title: "Abdelhaliem Portfolio",
  description:
    "this is Abdelhaliem Adham Portfolio made by Next.Js styled with tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
