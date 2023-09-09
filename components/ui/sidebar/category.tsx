export type UISideBarCategoryProps = {
  // Title for the link
  title: string;
};

export default function UISideBarCategory({ title }: UISideBarCategoryProps) {
  return (
    <div className="w-ful p-[4px]">
      <div className="px-[8px] pt-[4px] text-[#37352f] text-opacity-50">
        <p className="whitespace-nowrap text-[12px] font-semibold">{title}</p>
      </div>
    </div>
  );
}
