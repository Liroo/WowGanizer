export type UISideBarProps = {
  // Represent all navigation links and categories
  children: React.ReactNode;
};

export default function UISideBar({ children }: UISideBarProps) {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-[240px] bg-[#fbfbfa] py-[8px] shadow">
        {children}
      </div>
      <div className="h-full w-[240px]" />
    </>
  );
}
