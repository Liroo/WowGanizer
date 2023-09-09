import Link from 'next/link';

export type UISideBarLinkProps = {
  // Title for the link
  title: string;
  // Icon for the link, can be an emoji using UIIconEmoji or directly any React node such as svg
  icon: React.ReactNode;
  // Link to the page
  href: string;
  // Padding for designing sub category
  indentation?: number;
};

export default function UISideBarLink({
  title,
  icon,
  href,
  indentation = 0,
}: UISideBarLinkProps) {
  return (
    <div className="w-ful group px-[4px]">
      <Link
        href={href}
        className="group-hover:bg-primary flex rounded px-[8px] py-[4px] group-hover:bg-opacity-10"
        style={{
          paddingLeft: indentation + 8 + 'px',
        }}
      >
        <div className="mr-[8px]">{icon}</div>
        <p className="whitespace-nowrap">{title}</p>
      </Link>
    </div>
  );
}
