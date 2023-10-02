import { ChangeEventHandler, useEffect, useRef } from 'react';
import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ value, onChange }: Props) {
  const myRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.height = 'auto';
      myRef.current.style.height = myRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <RadixTextArea
        ref={myRef}
        value={value}
        onChange={onChange}
        size="3"
        variant="soft"
      />
    </Inset>
  );
}
