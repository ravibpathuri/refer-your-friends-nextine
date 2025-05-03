import AuthProvider from '@/components/Auth/AuthProvider';
import FullLayout from '@/components/layout/FullLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider session={null}>
      <FullLayout>
        <div>
          <h1>Admin Dashboard</h1>
          {children}
        </div>
      </FullLayout>
    </AuthProvider>
  );
}
