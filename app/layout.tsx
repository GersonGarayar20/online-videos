import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Online videso",
  description: "app de videos online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-neutral-400">
        <Nav />
        <main className="px-6">{children}</main>
        <Menu />
      </body>
    </html>
  );
}
