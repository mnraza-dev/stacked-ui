import { Button } from 'stackedui';

export default function PreviewWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-center p-8 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
}
