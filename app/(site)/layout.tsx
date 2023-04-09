import List from "./components/List";

export default function HomeLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="h-full">
      <List />
      {children}
    </div>
  );
}