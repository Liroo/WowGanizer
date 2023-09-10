import { useEffect, useRef, useState } from 'react';

export type UIFormInputSelectProps = {
  inputClassName?: string;
  suggestions?: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function UIFormInputTextSuggestions({
  className = 'bg-white',
  inputClassName = '',
  suggestions = [],
  ...props
}: UIFormInputSelectProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const onWindowClick = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setFocused(false);
      }
    };
    addEventListener('click', onWindowClick);

    return () => {
      removeEventListener('click', onWindowClick);
    };
  }, []);

  return (
    <div className="relative" ref={componentRef}>
      <div
        className={`my-[4px] h-[28px] w-full overflow-hidden rounded border border-primary border-opacity-60 ${className} ${
          props.disabled ? 'opacity-70' : ''
        }`}
      >
        <input
          {...props}
          onFocus={() => setFocused(true)}
          ref={inputRef}
          className={`h-full w-full px-[8px] ${inputClassName}`}
        />
      </div>

      {focused && (
        <div className="absolute left-0 top-[30px] z-10 max-h-[210px] min-h-[10px] w-full overflow-y-scroll rounded border border-primary border-opacity-60 bg-[#fbfbfa] shadow-sm">
          {suggestions
            .filter(
              (suggestion) =>
                !props.value ||
                suggestion
                  .toLowerCase()
                  .includes((props.value as string).toLowerCase()),
            )
            .map((suggestion) => (
              <div
                key={suggestion}
                className={`cursor-pointer border-b border-primary border-opacity-10 px-[8px] py-[2px] last:border-0 hover:bg-primary hover:bg-opacity-10`}
                onClick={() => {
                  if (inputRef.current) {
                    const nativeInputValueSetter = (
                      Object as any
                    ).getOwnPropertyDescriptor(
                      window.HTMLInputElement.prototype,
                      'value',
                    ).set;
                    nativeInputValueSetter.call(inputRef.current, suggestion);

                    const event2 = new Event('input', { bubbles: true });
                    inputRef.current.dispatchEvent(event2);
                    setFocused(false);
                  }
                }}
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
