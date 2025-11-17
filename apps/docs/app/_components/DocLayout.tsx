import Sidebar from "./Sidebar";

interface DocLayoutProps {
  children: React.ReactNode;
}
export default function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="flex-1 p-10 ml-64">{children}</main>
    </div>
  );
}
