import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="relative overflow-hidden lg:overflow-visible">
        {children}
      </main>
      <Footer />
    </div>
  );
}
