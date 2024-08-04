import AdminFooter from "@/components/admin-components/Footer";
import AdminHeader from "@/components/admin-components/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#2F2F2F]">
      <AdminHeader />
      {children}
      <AdminFooter />
    </div>
  );
}
