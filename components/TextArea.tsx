import { ChangeEvent, ChangeEventHandler } from 'react';
import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({ value, onChange }: Props) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    onChange(event);
  }

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <RadixTextArea
        value={value}
        onChange={handleChange}
        size="3"
        style={{ height: '100%' }}
        variant="soft"
      />
    </Inset>
  );
}
