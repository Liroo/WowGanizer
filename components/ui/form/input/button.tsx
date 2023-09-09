export type UIFormInputButtonProps = {
  onClick?: () => void;
  buttonClassName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function UIFormInputButton({
  className = 'bg-white',
  buttonClassName = '',
  ...props
}: UIFormInputButtonProps) {
  return (
    <div
      className={`my-[4px] flex h-[32px] w-full items-center justify-center rounded border border-primary border-opacity-30 ${className} ${
        props.disabled ? 'opacity-70' : ''
      }`}
    >
      <button {...props} className={`h-full w-full ${buttonClassName}`} />
    </div>
  );
}
