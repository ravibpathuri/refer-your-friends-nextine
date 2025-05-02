import FullLayout from '@/components/layout/FullLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FullLayout>{children}</FullLayout>
    </div>
  );
}
