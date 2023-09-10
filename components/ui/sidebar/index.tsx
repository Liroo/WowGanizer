export type UISideBarProps = {
  // Represent all navigation links and categories
  children: React.ReactNode;
};

export default function UISideBar({ children }: UISideBarProps) {
  return (
    <>
      <nav className="fixed left-0 top-0 h-full w-[240px] bg-[#fbfbfa] py-[8px] text-primary shadow">
        <div className="flex h-full flex-col overflow-y-auto">{children}</div>
      </nav>
      <div className="h-full w-[240px] min-w-[240px]" />
    </>
  );
}
