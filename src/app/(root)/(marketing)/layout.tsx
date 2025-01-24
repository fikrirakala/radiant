import Header from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative mx-auto max-w-7xl">
        <div className="from-28% absolute -right-60 -top-44 h-60 w-[36rem] rotate-[-10deg] transform-gpu rounded-full bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] via-[#ee87cb] via-70% to-[#b060ff] blur-3xl md:right-0"></div>
      </div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Header />
        </div>
      </div>
      {children}
    </>
  );
}
