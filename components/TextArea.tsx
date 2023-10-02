import { useEffect, useRef } from 'react';
import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

export default function TextArea({ value, onChange }: any) {
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
        size="3"
        onChange={onChange}
        style={{ height: '100%' }}
        variant="soft"
      />
    </Inset>
  );
}
