import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden">
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
