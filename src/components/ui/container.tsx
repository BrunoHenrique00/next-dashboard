export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6 m-auto container">{children}</div>
  );
}
