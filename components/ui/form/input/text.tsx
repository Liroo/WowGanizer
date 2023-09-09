export type UIFormInputTextProps = {
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function UIFormInputText({
  className = 'bg-white',
  inputClassName = '',
  ...props
}: UIFormInputTextProps) {
  return (
    <div
      className={`my-[4px] h-[28px] w-full overflow-hidden rounded border border-primary border-opacity-60 ${className} ${
        props.disabled ? 'opacity-70' : ''
      }`}
    >
      <input
        {...props}
        className={`h-full w-full px-[8px] ${inputClassName}`}
      />
    </div>
  );
}
