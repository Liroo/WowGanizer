import UIIconEmoji from '@/components/ui/icon/emoji';
import UISideBar from '@/components/ui/sidebar';
import UISideBarCategory from '@/components/ui/sidebar/category';
import UISideBarLink from '@/components/ui/sidebar/link';
import UISideBarToggle from '@/components/ui/sidebar/toggle';

export default function ShareSideBar() {
  return (
    <UISideBar>
      <UISideBarToggle title="Amardrassil" icon={<UIIconEmoji emoji="🌳" />}>
        <UISideBarLink
          title="01 - Glarlroot"
          icon={<UIIconEmoji emoji="🪵" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="02 - Igira"
          icon={<UIIconEmoji emoji="👣" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="03 - Volcoross"
          icon={<UIIconEmoji emoji="🐍" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="04 - Council"
          icon={<UIIconEmoji emoji="👪" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="05 - Larodar"
          icon={<UIIconEmoji emoji="🐴" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="06 - Nymue"
          icon={<UIIconEmoji emoji="🍀" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="07 - Smolderon"
          icon={<UIIconEmoji emoji="🔥" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="08 - Tindral"
          icon={<UIIconEmoji emoji="🐉" />}
          href="/"
          indentation={20}
        />
        <UISideBarLink
          title="09 - Fyrakk"
          icon={<UIIconEmoji emoji="☄️" />}
          href="/"
          indentation={20}
        />
      </UISideBarToggle>
      <UISideBarCategory title="Loot system" />
      <UISideBarLink
        title="Items"
        icon={<UIIconEmoji emoji="📑" />}
        href="/items"
      />
      <UISideBarLink
        title="Specs"
        icon={<UIIconEmoji emoji="📘" />}
        href="/specs"
      />
      <UISideBarLink
        title="Tier sets"
        icon={<UIIconEmoji emoji="📈" />}
        href="/tier-sets"
      />{' '}
      <UISideBarLink
        title="Trinkets"
        icon={<UIIconEmoji emoji="📊" />}
        href="/trinkets"
      />
    </UISideBar>
  );
}
