import { ChangeEventHandler, useEffect, useRef } from 'react';
import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ value, onChange }: Props) {
  const numberOfLines = value.split('\n').length;

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <RadixTextArea
        value={value}
        onChange={onChange}
        style={{
          height: `calc(${numberOfLines} * var(--line-height-3) + var(--space-2) * 2)`,
        }}
        size="3"
        variant="soft"
      />
    </Inset>
  );
}
