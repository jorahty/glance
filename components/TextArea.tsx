import { ChangeEvent, ChangeEventHandler, useEffect, useRef } from 'react';
import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ value, onChange }: Props) {
  const myRef = useRef<HTMLTextAreaElement | null>(null);

  function setHeight() {
    myRef.current!.style.height = 'auto';
    myRef.current!.style.height = myRef.current!.scrollHeight + 2 + 'px';
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setHeight();
    onChange(event);
  }

  useEffect(setHeight, []);

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <RadixTextArea
        ref={myRef}
        value={value}
        onChange={handleChange}
        size="3"
        spellCheck="false"
      />
    </Inset>
  );
}
