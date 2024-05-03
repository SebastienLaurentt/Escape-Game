import AccountHeader from "@/components/shared/Account/AccountHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AccountHeader />
      <div>{children}</div>
    </div>
  );
}
