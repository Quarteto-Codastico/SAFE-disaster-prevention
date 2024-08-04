import AdminFooter from "@/components/admin-components/Footer";
import AdminHeader from "@/components/admin-components/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <AdminHeader />
      {children}
      <AdminFooter />
    </div>
  );
}
