export type UIIconEmojiProps = {
  emoji: string;
};

export default function UIIconEmoji({ emoji }: UIIconEmojiProps) {
  return <span className="whitespace-nowrap">{emoji}</span>;
}
