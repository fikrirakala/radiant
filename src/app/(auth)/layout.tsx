export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -right-60 -top-44 h-60 w-[36rem] rotate-[-10deg] transform-gpu rounded-full bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] blur-3xl md:right-0"></div>
      </div>
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        {children}
      </div>
    </main>
  );
}
