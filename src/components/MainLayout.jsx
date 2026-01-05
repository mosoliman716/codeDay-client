
import Sidebar from "./Sidebar";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="md:ml-56 ml-5 min-h-screen">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
