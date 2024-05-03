import AccountHeader from "@/components/shared/Account/AccountHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <AccountHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
