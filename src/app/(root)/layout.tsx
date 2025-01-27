import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
